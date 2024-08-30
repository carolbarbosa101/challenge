import React from 'react';

interface CandidateProps {
    info: {name: string; phone: string; email: string};
    onBack: () => void;
}

const Candidate: React.FC<CandidateProps> = ({ info, onBack}) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Informações do Candidato </h2>
            <p>Nome: {info.name}</p>
            <p>Telefone: {info.phone} </p>
            <p>Email: {info.email} </p>
            <button className="btn btn-primary mt-4" onClick={onBack}>
                Voltar ao desafio
            </button>
        </div>
    );
};
export default Candidate;