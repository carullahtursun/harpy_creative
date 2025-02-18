export const uploadToCloudinary = async (file) => {
    const CLOUD_NAME = "diswtzh6b"; // Cloudinary'deki "Cloud Name"
    const UPLOAD_PRESET = "portfolio_preset"; // Yeni oluşturduğun "Unsigned" preset

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Cloudinary Hatası: ${data.error?.message || "Bilinmeyen hata"}`);
        }

        // 🔹 Eğer Cloudinary delete_token döndürmezse, boş string olarak ata
        return {
            url: data.secure_url,
            deleteToken: data.delete_token || ""
        };

    } catch (error) {
        console.error("Cloudinary yükleme hatası:", error);
        throw error;
    }
};


export const deleteFromCloudinary = async (deleteToken) => {
    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/diswtzh6b/delete_by_token`, {
            method: "POST",
            body: JSON.stringify({ token: deleteToken }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Cloudinary Silme Hatası: ${data.error?.message || "Bilinmeyen hata"}`);
        }

        return data;
    } catch (error) {
        console.error("Cloudinary silme hatası:", error);
        throw error;
    }
};
