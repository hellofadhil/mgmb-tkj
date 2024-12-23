"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navbar } from "@/components/navbar";

export default function Page() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    telephone: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    jabatan: "",
    unit_kerja: "",
    asal_sekolah: "",
    harapan: "",
    picture: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
  
    // Cek jika input adalah file
    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files; // Dapatkan file dari input
      if (files && files.length > 0) {
        setFormData((prevData) => ({ ...prevData, [id]: files[0] })); // Simpan file
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value })); // Simpan teks biasa
    }
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Ensure formData is an instance of FormData
    const formDataToSend = new FormData();
    
    // Append form fields
    formDataToSend.append('full_name', formData.full_name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('telephone', formData.telephone);
    formDataToSend.append('jenis_kelamin', formData.jenis_kelamin);
    formDataToSend.append('tanggal_lahir', formData.tanggal_lahir);
    formDataToSend.append('jabatan', formData.jabatan);
    formDataToSend.append('unit_kerja', formData.unit_kerja);
    formDataToSend.append('asal_sekolah', formData.asal_sekolah);
    formDataToSend.append('harapan', formData.harapan);
  
    // Append file if available
    const file = formData.picture;
    console.log(file)
    // if (file) {
    //   formDataToSend.append('picture', file);
    // }
  
    try {
      await axios.post('/api/daftar/anggota', formDataToSend, {
        headers: {
          'Content-Type': "application/json"
        }
      }
      );
  
      // Reset form data after successful submission
      setFormData({
        full_name: "",
        email: "",
        telephone: "",
        jenis_kelamin: "",
        tanggal_lahir: "",
        jabatan: "",
        unit_kerja: "",
        asal_sekolah: "",
        harapan: "",
        picture: null,
      });
  
      toast.success("Form submitted successfully!");
    } catch  {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <Card className="mx-auto max-w-2xl mt-8 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Form Daftar Anggota</CardTitle>
          <CardDescription>
            Musyawarah Guru Mata Pelajaran Teknik Jaringan Komputer dan Telekomunikasi se Jawa Barat
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* Nama Lengkap */}
            <div className="grid gap-2">
              <Label htmlFor="full_name">Nama Lengkap</Label>
              <Input
                id="full_name"
                type="text"
                placeholder="DIAN SEDIANA"
                required
                value={formData.full_name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Foto */}
            <div className="grid gap-2">
              <Label htmlFor="picture">Foto</Label>
              <Input
                id="picture"
                type="file"
                required
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="diansediana@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Telephone */}
            <div className="grid gap-2">
              <Label htmlFor="telephone">Telephone</Label>
              <Input
                id="telephone"
                type="tel"
                placeholder="6289544321121"
                required
                value={formData.telephone}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Jenis Kelamin */}
            <div className="grid gap-2">
              <Label htmlFor="jenis_kelamin">Jenis Kelamin</Label>
              <Select onValueChange={(value) => handleSelectChange(value, 'jenis_kelamin')} name="jenis_kelamin">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Jenis Kelamin</SelectLabel>
                    <SelectItem value="Laki-Laki">Laki-Laki</SelectItem>
                    <SelectItem value="Perempuan">Perempuan</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Tanggal Lahir */}
            <div className="grid gap-2">
              <Label htmlFor="tanggal_lahir">Tanggal Lahir</Label>
              <Input
                id="tanggal_lahir"
                type="date"
                required
                value={formData.tanggal_lahir}
                onChange={handleChange}
              />
            </div>

            {/* Jabatan */}
            <div className="grid gap-2">
              <Label htmlFor="jabatan">Jabatan</Label>
              <Select onValueChange={(value) => handleSelectChange(value, 'jabatan')} name="jabatan">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Jabatan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Jabatan</SelectLabel>
                    {/* Add select options here */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Unit Kerja */}
            <div className="grid gap-2">
              <Label htmlFor="unit_kerja">Unit Kerja</Label>
              <Input
                id="unit_kerja"
                type="text"
                placeholder="SMKN 1 KAWALI"
                required
                value={formData.unit_kerja}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Asal Sekolah */}
            <div className="grid gap-2">
              <Label htmlFor="asal_sekolah">Asal Sekolah</Label>
              <Input
                id="asal_sekolah"
                type="text"
                placeholder="SMK TI Bazma"
                required
                value={formData.asal_sekolah}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Harapan */}
            <div className="grid gap-2">
              <Label htmlFor="harapan">Harapan Bergabung di Sini</Label>
              <Textarea
                id="harapan"
                name="harapan"
                placeholder="Tulis pesan disini"
                required
                value={formData.harapan}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </>
  );
}
