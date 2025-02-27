"use client";
import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {
    addPortfolio, getPortfolios, updatePortfolio, deletePortfolio,
} from "@/config/portfolioService";
import {
    uploadToCloudinary, deleteFromCloudinary,
} from "@/config/cloudinaryService";

export default function PortfolioForm() {
    const {
        register, handleSubmit, formState: {errors}, reset, watch, setValue,
    } = useForm();

    const [portfolios, setPortfolios] = useState([]);
    const [images, setImages] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    const [heroImage, setHeroImage] = useState(null);
    const [existingHeroImage, setExistingHeroImage] = useState(null);
    const [videoUrl, setVideoUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);

    // Modal göster/gizle için state
    const [showModal, setShowModal] = useState(false);

    // isHero alanının değerini izleme
    const isHeroSelected = watch("isHero");

    // Portfolyoları başta çekme
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPortfolios();
            setPortfolios(data);
        };
        fetchData();
    }, []);

    // Form gönderme (Ekle/Güncelle)
    const onSubmit = async (data) => {
        setLoading(true);

        try {
            let uploadedImages = [];
            // Yeni seçilen resimler varsa bunları Cloudinary'e yükle
            if (images.length > 0) {
                uploadedImages = await Promise.all(images.map(async (file) => {
                    const uploadedFile = await uploadToCloudinary(file);
                    return {
                        url: uploadedFile.url, deleteToken: uploadedFile.deleteToken || "",
                    };
                }));
            }

            // Hero görseli için yükleme işlemi
            let heroImageUrl = existingHeroImage;
            if (data.isHero && heroImage) {
                const uploadedHeroImage = await uploadToCloudinary(heroImage);
                heroImageUrl = {
                    url: uploadedHeroImage.url, deleteToken: uploadedHeroImage.deleteToken || "",
                };
            }

            // Portfolyo verilerini oluştur
            let portfolioData = {
                title: data.title || "",
                subtitle: data.subtitle || "",
                content: data.content || "",
                tags: data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [],
                images: [...existingImages, ...uploadedImages],
                isHero: data.isHero || false,
                heroImage: heroImageUrl || "",
                videoUrl: videoUrl || "",
            };

            // Undefined ya da null değerleri ayıkla
            portfolioData = Object.fromEntries(Object.entries(portfolioData).filter(([_, value]) => value !== undefined));

            if (selectedPortfolio) {
                // Güncelleme
                await updatePortfolio(selectedPortfolio.id, portfolioData);
                alert("Portfolyo güncellendi!");
                setPortfolios((prev) => prev.map((p) => p.id === selectedPortfolio.id ? {...p, ...portfolioData} : p));
            } else {
                // Yeni ekleme
                const newPortfolioId = await addPortfolio(portfolioData);
                setPortfolios((prev) => [...prev, {id: newPortfolioId, ...portfolioData},]);
                alert("Portfolyo başarıyla eklendi!");
            }

            // Form ve ilgili stateleri sıfırla
            reset();
            setImages([]);
            setExistingImages([]);
            setHeroImage(null);
            setExistingHeroImage(null);
            setVideoUrl("");
            setSelectedPortfolio(null);
            setShowModal(false); // Modal kapat
        } catch (error) {
            alert("Portfolyo eklenirken hata oluştu: " + error.message);
            console.error("Hata:", error);
        }

        setLoading(false);
    };

    // Mevcut bir portfolyoyu düzenlemek için modal aç
    const handleEdit = (portfolio) => {
        setSelectedPortfolio(portfolio);
        setValue("title", portfolio.title);
        setValue("subtitle", portfolio.subtitle);
        setValue("content", portfolio.content);
        setValue("tags", portfolio.tags.join(", "));
        setValue("isHero", portfolio.isHero);
        setVideoUrl(portfolio.videoUrl);
        setExistingImages(portfolio.images || []);
        setExistingHeroImage(portfolio.heroImage || null);
        setShowModal(true);
    };

    // Yeni ekleme için modal aç
    const handleAddNew = () => {
        // Tüm form ve state'leri sıfırla
        reset();
        setImages([]);
        setExistingImages([]);
        setHeroImage(null);
        setExistingHeroImage(null);
        setVideoUrl("");
        setSelectedPortfolio(null);
        setShowModal(true);
    };

    // Modalı kapat
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Silme işlemi
    const handleDelete = async (portfolio) => {
        if (!window.confirm("Bu portfolyoyu silmek istediğinizden emin misiniz?")) {
            return;
        }

        try {
            await deletePortfolio(portfolio.id);

            // Aşağıdaki kodu aktif hale getirirseniz silinen görselleri Cloudinary'den de kaldırır.
            /*
            if (portfolio.images) {
              await Promise.all(
                portfolio.images.map((img) => deleteFromCloudinary(img.deleteToken))
              );
            }
            if (portfolio.heroImage) {
              await deleteFromCloudinary(portfolio.heroImage.deleteToken);
            }
            */

            setPortfolios((prev) => prev.filter((p) => p.id !== portfolio.id));
            alert("Portfolyo silindi!");
        } catch (error) {
            alert("Hata oluştu: " + error.message);
        }
    };

    // Çoklu resim seçimi
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages((prev) => [...prev, ...files]);
    };

    // Yeni yüklenen resimleri sil
    const removeImage = async (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    // Daha önce mevcut olan resimleri sil
    const removeExistingImage = async (index) => {
        const imageToRemove = existingImages[index];
        await deleteFromCloudinary(imageToRemove.deleteToken);
        setExistingImages((prev) => prev.filter((_, i) => i !== index));
    };

    // Hero resmini seçme
    const handleHeroImageUpload = (e) => {
        const file = e.target.files[0];
        setHeroImage(file);
    };

    // Mevcut hero resmini sil
    const removeExistingHeroImage = async () => {
        if (!window.confirm("Ana görseli silmek istediğinize emin misiniz?")) {
            return;
        }
        await deleteFromCloudinary(existingHeroImage.deleteToken);
        setExistingHeroImage(null);
    };

    return (
        <div className="container vh-100 mt-4">

            {/* Ekle butonu */}
            <div className=" mb-4">
                <button className="btn btn-primary" onClick={handleAddNew}>
                    Yeni Portfolyo Ekle
                </button>
            </div>

            {/* Portfolyoların listelendiği tablo */}
            <div className="table-responsive">
                <table className="table table-hover table-dark rounded overflow-hidden">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Başlık</th>
                        <th>Alt Başlık</th>
                        <th>İçerik</th>
                        <th>Etiketler</th>
                        <th>Video</th>
                        <th>Resimler</th>
                        <th>Ana Görsel</th>
                        <th>İşlemler</th>
                    </tr>
                    </thead>
                    <tbody>
                    {portfolios.length > 0 ? (portfolios.map((portfolio, index) => (<tr key={portfolio.id}>
                                <td>{index + 1}</td>
                                <td
                                    className="text-truncate"
                                    style={{maxWidth: "150px"}}
                                    title={portfolio.title}
                                >
                                    {portfolio.title}
                                </td>
                                <td
                                    className="text-truncate"
                                    style={{maxWidth: "150px"}}
                                    title={portfolio.subtitle}
                                >
                                    {portfolio.subtitle}
                                </td>
                                <td
                                    className="text-truncate"
                                    style={{maxWidth: "200px"}}
                                    title={portfolio.content}
                                >
                                    {portfolio.content}
                                </td>
                                <td
                                    className="text-truncate"
                                    style={{maxWidth: "150px"}}
                                    title={portfolio.tags.join(", ")}
                                >
                                    {portfolio.tags.join(", ")}
                                </td>
                                <td>
                                    {portfolio.videoUrl ? (<a
                                            href={portfolio.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            İzle
                                        </a>) : ("-")}
                                </td>
                                <td>
                                    <div
                                        className="d-flex flex-wrap overflow-auto p-1"
                                        style={{
                                            maxWidth: "200px", maxHeight: "100px", overflowY: "auto",
                                        }}
                                    >
                                        {portfolio.images?.map((img, i) => (<img
                                                key={i}
                                                src={img.url}
                                                alt="Portfolio"
                                                className="img-thumbnail me-1"
                                                style={{
                                                    width: "50px", height: "50px", objectFit: "cover",
                                                }}
                                            />))}
                                    </div>
                                </td>
                                <td>
                                    {portfolio.heroImage?.url ? (<img
                                            src={portfolio.heroImage.url}
                                            alt="Portfolio Hero"
                                            className="img-thumbnail me-2"
                                            style={{width: "70px", height: "50px", objectFit: "cover"}}
                                        />) : ("-")}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-warning me-2"
                                        onClick={() => handleEdit(portfolio)}
                                    >
                                        Düzenle
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(portfolio)}
                                    >
                                        Sil
                                    </button>
                                </td>
                            </tr>))) : (<tr>
                            <td colSpan="9" className="text-center text-muted">
                                Henüz portfolyo eklenmedi.
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

            {/* Modal (Ekleme/Güncelleme Formu) */}
            <div
                className={`modal fade ${showModal ? "show" : ""}`}
                style={{display: showModal ? "block" : "none"}}
                tabIndex="-1"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {selectedPortfolio ? "Portfolyo Güncelle" : "Portfolyo Ekle"}
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                onClick={handleCloseModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Başlık</label>
                                        <textarea
                                            className="form-control"
                                            rows="2"
                                            {...register("title", {required: "Başlık zorunludur"})}
                                            placeholder="Başlık girin..."
                                        />
                                        {errors.title && (<span className="text-danger">{errors.title.message}</span>)}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold">Alt Başlık</label>
                                        <textarea
                                            rows="2"
                                            className="form-control"
                                            {...register("subtitle", {
                                                required: "Alt başlık zorunludur",
                                            })}
                                            placeholder="Alt başlık girin..."
                                        />
                                        {errors.subtitle && (<span className="text-danger">
                        {errors.subtitle.message}
                      </span>)}
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label fw-bold">İçerik</label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        {...register("content", {required: "İçerik zorunludur"})}
                                        placeholder="İçerik girin..."
                                    ></textarea>
                                    {errors.content && (<span className="text-danger">{errors.content.message}</span>)}
                                </div>

                                <div>
                                    <label className="form-label fw-bold">Etiketler</label>
                                    <input
                                        className="form-control"
                                        {...register("tags")}
                                        placeholder="Virgülle ayırarak etiketleri girin..."
                                    />
                                </div>

                                <div>
                                    <label className="form-label fw-bold">Video Linki</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={videoUrl}
                                        onChange={(e) => setVideoUrl(e.target.value)}
                                        placeholder="Video URL girin..."
                                    />
                                </div>

                                <div>
                                    <label className="form-label fw-bold">Resimler</label>
                                    <input
                                        type="file"
                                        multiple
                                        className="form-control"
                                        onChange={handleImageUpload}
                                    />
                                    <div className="d-flex flex-wrap mt-2">
                                        {existingImages.map((img, index) => (
                                            <div key={index} className="position-relative me-2">
                                                <img
                                                    src={img?.url}
                                                    alt={`Mevcut ${index}`}
                                                    className="img-thumbnail"
                                                    width="100"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-danger position-absolute top-0 end-0"
                                                    onClick={() => removeExistingImage(index)}
                                                >
                                                    X
                                                </button>
                                            </div>))}
                                        {images.map((file, index) => (
                                            <div key={index} className="position-relative me-2">
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={`Yeni ${index}`}
                                                    className="img-thumbnail"
                                                    width="100"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-danger position-absolute top-0 end-0"
                                                    onClick={() => removeImage(index)}
                                                >
                                                    X
                                                </button>
                                            </div>))}
                                    </div>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        {...register("isHero")}
                                    />
                                    <label className="form-check-label fw-bold">
                                        Ana Görsel Kullan (1920x1000)
                                    </label>
                                </div>

                                {isHeroSelected && (<div>
                                        <label className="form-label fw-bold text-warning">
                                            Ana Görsel (1920x1000 px önerilir)
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleHeroImageUpload}
                                        />
                                        {existingHeroImage && (<div className="mt-2 position-relative">
                                                <img
                                                    src={existingHeroImage?.url}
                                                    alt="Mevcut Hero"
                                                    className="img-thumbnail"
                                                    width="200"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-danger position-absolute top-0 end-0"
                                                    onClick={removeExistingHeroImage}
                                                >
                                                    X
                                                </button>
                                            </div>)}
                                    </div>)}

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >
                                    {selectedPortfolio ? loading ? "Güncelleniyor..." : "Güncelle" : loading ? "Ekleniyor..." : "Ekle"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
