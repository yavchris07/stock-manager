// src/components/ui/Modal.tsx
"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function Modal({ isOpen, onClose, title, children, actionLabel, onAction }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">{children}</div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          {actionLabel && <Button onClick={onAction}>{actionLabel}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}