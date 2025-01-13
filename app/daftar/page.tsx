"use client";

import { useRef, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");

  const [formData, setFormData] = useState<{
    full_name: string;
    email: string;
    telephone: string;
    jenis_kelamin: string;
    tanggal_lahir: string;
    jabatan: string;
    unit_kerja: string;
    asal_sekolah: string;
    harapan: string;
    picture: File | null;
  }>({
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

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const file = e.target.files?.[0] || null;
      setFormData((prevData) => ({ ...prevData, picture: file }));
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Check file size (in bytes)
      const maxSize = 250 * 1024; // 300KB in bytes

      const validTypes = ["image/jpg", "image/jpeg", "image/webp"];
      if (!validTypes.includes(file.type)) {
        setError("Please upload a valid image (JPG, JPEG, or WEBP).");
        inputFileRef.current!.value = ""; 
        return;
      }

      if (file.size > maxSize) {
        setError("File size exceeds 300KB. Please upload a smaller file.");
        inputFileRef.current!.value = ""; 
      } else {
        setError(""); 
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof typeof formData];
      if (value) {
        formDataToSend.append(key, value as string | Blob);
      }
    });

    const file = inputFileRef.current?.files?.[0];
    if (file) {
      formDataToSend.append('picture', file);
    }

    try {
      await fetch('/api/daftar/anggota', {
        method: 'POST',
        body: formDataToSend,
      });

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

      if (inputFileRef.current) {
        inputFileRef.current.value = "";
      }

      toast.success("Form submitted successfully!");
    } catch {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Card className="mx-auto max-w-2xl mt-8 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Form Daftar Anggota</CardTitle>
          <CardDescription>
            Musyawarah Guru Mata Pelajaran Teknik Jaringan Komputer dan Telekomunikasi se Jawa Barat
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
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

            <div className="grid gap-2">
              <Label htmlFor="picture">Foto</Label>
              <Input
                name="file"
                multiple={false}
                id="picture"
                type="file"
                ref={inputFileRef}
                required
                accept="image/jpeg, image/jpg, image/webp"  // Accept only JPG, JPEG, and WEBP
                onChange={handleFileChange}
              />
              {error && <p style={{ color: 'red' }} className="text-sm">{error}</p>}
            </div>

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

            <div className="grid gap-2">
              <Label htmlFor="jabatan">Jabatan</Label>
              <Select onValueChange={(value) => handleSelectChange(value, 'jabatan')} name="jabatan">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Jabatan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Jabatan</SelectLabel>
                    <SelectItem value="PELINDUNG">PELINDUNG</SelectItem>
                    <SelectItem value="PEMBINA">PEMBINA</SelectItem>
                    <SelectItem value="PENGARAH">PENGARAH</SelectItem>
                    <SelectItem value="KETUS">KETUS</SelectItem>
                    <SelectItem value="WAKIL KETUA">WAKIL KETUA</SelectItem>
                    <SelectItem value="SEKRETARIS">SEKRETARIS</SelectItem>
                    <SelectItem value="BIDANG PERENCANAAN">BIDANG PERENCANAAN</SelectItem>
                    <SelectItem value="BIDANG PENGEMBANGAN ORGANISASI">BIDANG PENGEMBANGAN ORGANISASI</SelectItem>
                    <SelectItem value="BIDANG SARANA PRASARANA">BIDANG SARANA PRASARANA</SelectItem>
                    <SelectItem value="BIDANG HUMAS DAN KERJASAMA">BIDANG HUMAS DAN KERJASAMA</SelectItem>
                    <SelectItem value="BIDANG PRESTASI">BIDANG PRESTASI</SelectItem>
                    <SelectItem value="KOORDINATOR WILAYAH 1">KOORDINATOR WILAYAH 1</SelectItem>
                    <SelectItem value="KOORDINATOR WILAYAH 2">KOORDINATOR WILAYAH 2</SelectItem>
                    <SelectItem value="KOORDINATOR WILAYAH 3">KOORDINATOR WILAYAH 3</SelectItem>
                    <SelectItem value="KOORDINATOR WILAYAH 4">KOORDINATOR WILAYAH 4</SelectItem>
                    <SelectItem value="KOORDINATOR WILAYAH 5">KOORDINATOR WILAYAH 5</SelectItem>
                    <SelectItem value="TIDAK ADA JABATAN">TIDAK ADA JABATAN</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

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

            <div className="grid gap-2">
              <Label htmlFor="harapan">Harapan</Label>
              <Textarea
                id="harapan"
                placeholder="Harapan anda mengenai pengembangan organisasi..."
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
