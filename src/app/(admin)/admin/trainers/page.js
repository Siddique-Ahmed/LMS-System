import { TrainersTable } from "@/components/dataTables/TrainerTable";
import { TrainersDialog } from "@/components/modals/TrainerModal";

export default function Trainers(){
  return(
    <div className="min-h-screen py-10">
      <div className="w-full flex justify-between">
      <h1 className="text-center font-bold text-2xl">Trainers</h1>
      <TrainersDialog/>
      </div>
      <TrainersTable/>
    </div>
  )
}