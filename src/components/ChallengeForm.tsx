import { useState } from 'react';
import Timer from './Timer';
import Modal from './Modal';
import Candidate from '../pages/Candidate';


const ChallengeForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [showTimer, setShowTimer] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showCandidateModal, setShowCandidateModal] = useState(false);

    const handleStart = () => {
        if (name && phone && email) {
            setShowTimer(true);
            setIsTimerRunning(true); //tempo comeca a contar
        } else {
            alert('Por favor preencha os campos antes de iniciar o desafio!')
        }
    };

    const handleSubmit = () => {
        if (isTimerRunning) {
            setModalMessage('Parabéns, desafio finalizado com sucesso!');
            setIsTimerRunning(false);
            setShowTimer(false);
        }
    };

    const handleTimeout = () => {
        setShowCandidateModal(false);
        setModalMessage('Desafio finalizado com falha!');
        setIsTimerRunning(false);
        setShowTimer(false); // Esconde o timer
    };

    const handleOpenCandidateModal = () => {
        setShowCandidateModal(true);
    };

    const handleCloseCandidateModal = () => {
        setShowCandidateModal(false);
    };

    return (
        <div className="p-6 space-y-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold">Prencha suas informações: </h2>
            <input
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Telefone"
                className="input input-bordered w-full mb-4 "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div>
                <button onClick={handleStart} className="btn btn-primary">
                    Iniciar Desafio
                </button>
            </div>

            {showTimer && (
                <div className="space-y-4">
                    <Timer onTimeout={handleTimeout} />
                    <div className="flex justify-center space-x-4 mt-4" > 
                    <button onClick={handleSubmit} className="btn btn-secondary mt-4">
                        Enviar
                    </button>
                    <button onClick={handleOpenCandidateModal} className="btn btn-secondary mt-4">
                        Ver dados do Candidato
                    </button>
                    </div>
                </div>
            )}

            {modalMessage && (
                <Modal message={modalMessage} onClose={() => setModalMessage('')} />
            )}

            {showCandidateModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <Candidate
                            info={{ name, phone, email }}
                            onBack={handleCloseCandidateModal}
                        />
                    </div>
                </div>
            )}

        </div>
    );
};
export default ChallengeForm;