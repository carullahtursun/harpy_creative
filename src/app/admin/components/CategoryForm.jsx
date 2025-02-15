'use client';
import { useForm } from "react-hook-form";
import {useState} from "react";

export default function CategoryForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [categories, setCategories] = useState([]);

    const onSubmit = (data) => {
        setCategories([...categories, data]);
        reset();
    };

    return (
        <div className="vh-100 container mt-4">
            <div className="card bg-dark text-white p-4 shadow-lg rounded">
                <h3 className="mb-3 text-white text-center">Kategori Ekle</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
                    <div>
                        <label className="form-label fw-bold">Kategori Adı</label>
                        <input
                            className={`form-control ${errors.categoryName ? 'is-invalid' : ''}`}
                            {...register("categoryName", { required: "Kategori adı zorunludur" })}
                            placeholder="Kategori adını girin..."
                        />
                        {errors.categoryName && <div className="invalid-feedback">{errors.categoryName.message}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Ekle</button>
                </form>
            </div>
            <div className="mt-4">
                <h4 className="text-center text-white">Kategoriler</h4>
                {categories.length > 0 ? (
                    <table className="table table-hover table-dark rounded overflow-hidden">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Kategori Adı</th>
                        </tr>
                        </thead>
                        <tbody>
                        {categories.map((category, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{category.categoryName}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-muted">Henüz kategori eklenmedi.</p>
                )}
            </div>
        </div>
    );
}