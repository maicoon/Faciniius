interface Props {
    onClose: () => void;
    visible: boolean;
    id: string;
    children: React.ReactNode
}

export default function ModalDefault({ onClose, id, visible, children }: Props) {
    const handleCloseModal = (e: any) => {
        if (e.target.id === id) {
            onClose();
        }
    }

    return(
        <div className={`overlay ${visible ? 'visible' : ''}`} id={id} onClick={handleCloseModal}>
            <div className={`containerModal ${visible ? 'visible' : ''}`}>
                {children}
            </div>
        </div>
    )
}
