"use client";
import * as React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BatchesDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Courses</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Courses</DialogTitle>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batches</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batches</DrawerTitle>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="course_name">Batch Name</Label>
        <Input required type="text" id="course_name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="trainer">Trainer</Label>
        <Input required id="trainer" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="courseName">Course Name</Label>
        <Input required id="courseName" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="noOfStudents">No Of Students</Label>
        <Input required id="noOfStudents" />
      </div>
      <div className="grid gap-2">
        <Select required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="pending" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">pending</SelectItem>
            <SelectItem value="completed">completed</SelectItem>
            <SelectItem value="ongoing">ongoing</SelectItem>
            <SelectItem value="merged">merged</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Add Batch</Button>
    </form>
  );
}
