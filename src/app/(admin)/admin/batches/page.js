import { BatchesTable } from "@/components/dataTables/BatchesTable";
import { BatchesDialog } from "@/components/modals/BatcheModal";

export default function Batches() {
  return (
    <div className="min-h-screen py-10">
      <div className="w-full flex justify-between">
        <h1 className="text-center font-bold text-2xl">Batches</h1>
        <BatchesDialog />
      </div>
      <BatchesTable />
    </div>
  );
}
