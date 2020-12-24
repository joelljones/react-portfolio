import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'fontsource-notable';
import 'fontsource-space-mono';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaSass } from 'react-icons/fa';
import { FiCodepen } from 'react-icons/fi';
import { SiGithub, SiHtml5, SiJavascript, SiLinkedin } from 'react-icons/si';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
    background: `black url(${
      process.env.PUBLIC_URL +
      'https://source.unsplash.com/featured/regular/?cyberpunk,neoncity'
    }) no-repeat fixed center/cover`,
    color: 'white',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)',
  },
  container: {
    height: '100vh',
    width: '90%',
  },
  name: {
    fontFamily: 'Notable',
    paddingTop: '52.5vh',
    marginBottom: '0.25rem',
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'Space Mono',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  techs: {
    marginLeft: '0.5rem',
    marginBottom: '2rem',
    display: 'flex',
  },
  linkGroup: {
    marginLeft: '0.5rem',
  },
});

export default function Hero() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <div className={classes.overlay}>
        <Container className={classes.container}>
          {/* NAME */}
          <Typography className={classes.name} variant="h3">
            Joell Jones
          </Typography>

          {/* TITLE */}
          <Typography className={classes.title} variant="h4" gutterBottom>
            Web Developer
          </Typography>

          {/* TECH STACK */}
          <Typography component="div" className={classes.techs} gutterBottom>
            <IconContext.Provider
              value={{ size: '2rem', style: { marginRight: '1rem' } }}
            >
              <div>
                <SiHtml5 />
              </div>
              <div>
                <FaSass />
              </div>
              <div>
                <SiJavascript />
              </div>
            </IconContext.Provider>
          </Typography>

          {/* LINKS */}
          <Typography component="div" className={classes.linkGroup}>
            <IconContext.Provider
              value={{
                size: '2rem',
                style: { color: 'white', marginRight: '1rem' },
              }}
            >
              <a
                href="https://github.com/joelljones"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub />
              </a>
              <a
                href="https://codepen.io/joelljones/pens/public"
                target="_blank"
                rel="noreferrer"
              >
                <FiCodepen />
              </a>
              <a
                href="https://www.linkedin.com/in/joelljones/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://rebrand.ly/4455e"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </IconContext.Provider>
          </Typography>
        </Container>
      </div>
    </main>
  );
}
