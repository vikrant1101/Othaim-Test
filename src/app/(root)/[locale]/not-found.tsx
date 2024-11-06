import Styles from './[...not-found]/index.module.scss';
import Button from '@/components/Button';
export default function NotFound() {
  return (
    <div className={` containerXL innerSpace`}>
      <div className={`${Styles.notFoundTextAlign} column gap24`}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
          >
            <path
              d="M56 8L68 24H116H128V36V108V120H116H12H0V108V20V8H12H56ZM68 36H62L58.4 31.2L50 20H12V108H116V36H68ZM84 68C84 72.45 82.775 76.625 80.675 80.225L90.25 89.8L94.5 94.05L86 102.525L81.75 98.275L72.15 88.675C68.6 90.8 64.45 92 60 92C46.75 92 36 81.25 36 68C36 54.75 46.75 44 60 44C73.25 44 84 54.75 84 68ZM60 80C63.1826 80 66.2348 78.7357 68.4853 76.4853C70.7357 74.2348 72 71.1826 72 68C72 64.8174 70.7357 61.7652 68.4853 59.5147C66.2348 57.2643 63.1826 56 60 56C56.8174 56 53.7652 57.2643 51.5147 59.5147C49.2643 61.7652 48 64.8174 48 68C48 71.1826 49.2643 74.2348 51.5147 76.4853C53.7652 78.7357 56.8174 80 60 80Z"
              fill="#9DC41A"
            />
          </svg>
        </div>
        <h3 className={Styles.notFoundTitle}>404</h3>
        <h5 className={`h4 ${Styles.h5}`}>
          The page you requested was not found, and we have a fine guess why.
        </h5>
        <p>
          {`> If you typed the URL directly, please make sure the spelling is
          correct.`}
          <br />{' '}
          {`> If you clicked on a link to get here, the link is outdated.`}
        </p>

        <div className={`dFlex justifyContentCenter gap24`}>
          <Button label=" Go Back" link={'/'} varient="Outline" />
          <Button label="Home" link={'/'} varient="Primary" />
          {/* <Link href="/" className={Styles.notFoundButton}>
          Home
        </Link> */}
        </div>
      </div>
    </div>
  );
}
