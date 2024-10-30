import { StudentTable } from "@/components/dataTables/StudentTable";
import { StudentsDialog } from "@/components/modals/StudentModal";

export default function Students(){
  return(
    <div className="min-h-screen py-10">
      <div className="w-full flex justify-between">
      <h1 className="text-center font-bold text-2xl">Students</h1>
    <StudentsDialog/>
      </div>
      <StudentTable/>
    </div>
  )
}