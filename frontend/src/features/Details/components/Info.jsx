import './Info.sass';
import { useGlobal } from 'reactn';

import Config from '../../../config';

function Info() {
  const version = useGlobal('version')[0];

  return (
    <div className="info">
      <div className="top">
        <div className="logo">
          <h3 style={{ color: '#0047AB', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Anurag Mishra
          </h3>
        </div>
        <div className="text">
          Welcome to
          {' '}
          Anurag Mishra
          !
          <br />
          <br />
          Anurag Mishra
          {' '}
          is a messaging app that enables real-time messaging, audio and video calls,
          groups and conferencing.
        </div>
      </div>
      <div className="text">
        Copyright &copy;
        {' '}
        {Config.brand || 'Honeyside'}
        <br />
        v
        {version}
      </div>
    </div>
  );
}

export default Info;
