import { Modal } from "../../../../../components/Modal";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
}

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  return (
    <Modal title="Filtros" open={open} onClose={onClose}>
      FiltersModal
    </Modal>
  );
}
