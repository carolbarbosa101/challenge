import { useState } from 'react'
import ChallengeForm from './components/ChallengeForm';
import Candidate from './pages/Candidate';

function App() {
  const [isChallengeStarted, setIsChanllengeStarted] = useState(false);
  const [candidateInfo, setCandidateInfo] = useState({name: '', phone: '', email:''});

  return (
    <>
      <div className="p-4">
       {!isChallengeStarted ? (
        <ChallengeForm
          onStart={(info) => {
          setCandidateInfo(info);
          setIsChanllengeStarted(true);
        }}
        />
      ) : (
        <Candidate info={candidateInfo} onBack={() => setIsChanllengeStarted(false)} />
      )}
      </div>
    </>
  )
}

export default App
