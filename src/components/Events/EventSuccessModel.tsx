"use client"

import React from 'react'
import { Modal } from '../modal'
// import { Button } from '../Form/Button/Button'

function EventSuccessModel({
    isOpen,
    closeModal,
    children
}: {
    isOpen: boolean,
    closeModal: () => void,
    children: React.ReactNode
}) {
    return (
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[500px] p-5 lg:p-10">
            {children}
        </Modal>
    )
}

export default EventSuccessModel