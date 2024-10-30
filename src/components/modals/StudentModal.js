"use client";
import * as React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StudentsDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid gap-4", className)}>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input required type="text" id="firstName" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input required id="lastName" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="education">Education</Label>
          <Input required id="education" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cnic">CNIC</Label>
          <Input required id="cnic" type="number" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input required id="email" type="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="profilePicture">Profile Picture</Label>
          <Input required id="profilePicture" type="file" />
        </div>
        <div className="grid gap-2 col-span-2">
          <Label htmlFor="address">Address</Label>
          <Input required id="address" />
        </div>
        <div className="grid gap-2">
          <Select required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Select required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="trainer">Trainer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button type="submit">Add Student</Button>
      </div>
    </form>
  );
}
