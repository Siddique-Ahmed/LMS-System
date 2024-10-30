import { CourseTable } from "@/components/dataTables/CourseTable";
import { CourseDialog } from "@/components/modals/CourseModal";

export default function Courses(){
  return(
    <div className="min-h-screen py-10">
      <div className="w-full flex justify-between">
      <h1 className="text-center font-bold text-2xl">Courses</h1>
      <CourseDialog/>
      </div>
      <CourseTable/>
    </div>
  )
}
