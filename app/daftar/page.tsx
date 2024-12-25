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
  const inputFileRef = useRef<HTMLInputElement>(null);

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
    picture: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files;
      if (files && files.length > 0) {
        setFormData((prevData) => ({ ...prevData, [id]: files[0] }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
        picture: undefined,
      });

      toast.success("Form submitted successfully!");
    } catch {
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
              <input
                name="file"
                multiple={false}
                id="picture"
                type="file"
                ref={inputFileRef}
                required
              />
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
