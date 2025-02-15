'use client';
import { useForm } from "react-hook-form";
import React, {useState} from "react";

export default function BlogForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [blogs, setBlogs] = useState([]);
    const [images, setImages] = useState([]);

    const onSubmit = (data) => {
        setBlogs([...blogs, { ...data, images }]);
        reset();
        setImages([]);
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages([...images, ...files.map(file => URL.createObjectURL(file))]);
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-4">
            <div className="card bg-dark text-white p-4 shadow-lg rounded">
                <h3 className="mb-3 text-white text-center">Blog Ekle</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Başlık</label>
                            <input className={`form-control ${errors.title ? 'is-invalid' : ''}`} {...register("title", { required: "Başlık zorunludur" })} placeholder="Başlık girin..." />
                            {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Alt Başlık</label>
                            <input className={`form-control ${errors.subtitle ? 'is-invalid' : ''}`} {...register("subtitle", { required: "Alt başlık zorunludur" })} placeholder="Alt başlık girin..." />
                            {errors.subtitle && <div className="invalid-feedback">{errors.subtitle.message}</div>}
                        </div>
                    </div>
                    <div>
                        <label className="form-label fw-bold">İçerik</label>
                        <textarea className={`form-control ${errors.content ? 'is-invalid' : ''}`} rows="5" {...register("content", { required: "İçerik zorunludur" })} placeholder="İçerik girin..."></textarea>
                        {errors.content && <div className="invalid-feedback">{errors.content.message}</div>}
                    </div>
                    <div>
                        <label className="form-label fw-bold">Etiketler</label>
                        <input className="form-control" {...register("tags")} placeholder="Virgülle ayırarak etiketleri girin..." />
                    </div>
                    <div>
                        <label className="form-label fw-bold">Kategori</label>
                        <select className="form-control" {...register("category")}>
                            <option value="">Kategori Seçin...</option>
                            <option value="Teknoloji">Teknoloji</option>
                            <option value="Sağlık">Sağlık</option>
                            <option value="Eğitim">Eğitim</option>
                        </select>
                    </div>
                    <div>
                        <label className="form-label fw-bold">Resimler</label>
                        <input type="file" multiple className="form-control" onChange={handleImageUpload} />
                        <div className="d-flex flex-wrap mt-2">
                            {images.map((img, index) => (
                                <div key={index} className="position-relative me-2">
                                    <img src={img} alt={`Preview ${index}`} className="img-thumbnail" width="100" />
                                    <button className="btn btn-sm btn-danger position-absolute top-0 end-0" onClick={() => removeImage(index)}>X</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Ekle</button>
                </form>
            </div>
            <div className="mt-4">
                <h4 className="text-center text-white">Eklenen Bloglar</h4>
                {blogs.length > 0 ? (
                    <table className="table table-hover table-dark rounded overflow-hidden">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Başlık</th>
                            <th>Alt Başlık</th>
                            <th>İçerik</th>
                            <th>Etiketler</th>
                            <th>Kategori</th>
                            <th>Resimler</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blogs.map((blog, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{blog.title}</td>
                                <td>{blog.subtitle}</td>
                                <td>{blog.content}</td>
                                <td>{blog.tags}</td>
                                <td>{blog.category}</td>
                                <td>
                                    <div className="d-flex">
                                        {blog.images && blog.images.map((img, i) => (
                                            <img key={i} src={img} alt="Blog" className="img-thumbnail me-2" width="50" />
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-muted">Henüz blog eklenmedi.</p>
                )}
            </div>
        </div>
    );
}
