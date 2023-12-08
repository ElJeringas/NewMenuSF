import {images} from '../../constants';
import { useTranslation } from 'react-i18next';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Events.css';

const SpecialEvents = () => {
  const {t} = useTranslation('global')
  return (
    <div className='app__specialMenu flex__center section__padding' id='event'>
      <div className='app__specialMenu-title'>
        <SubHeading title={t(`event.subtitle`)}/>
        <h1 className='headtext__cormorant'>{t(`event.title`)}</h1>
      </div>
      <div>
        <img src={images.menuNavidad}  alt='events' width={'100%'} height={'100%'}/>
      </div>
      <a type='button' href='https://api.whatsapp.com/send?phone=593979723405' target="_blank" rel="noopener noreferrer"  className='custom__button' style={{marginTop:'2rem'}}>{t(`event.button`)}</a>
    </div>
  )
}

export default SpecialEvents;