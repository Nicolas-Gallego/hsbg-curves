import React, { useState, useEffect } from 'react';
import styles from './HeroCard.module.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Avatar from '@mui/material/Avatar';
import { lightBlue } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { lightGreen } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { red } from '@mui/material/colors';

export default function HeroCard(props) {
  const [tierColor, setTierColor] = useState('');
  useEffect(() => {
    if (props.hero) {
      if (props.hero.tier.charAt(0) === 'S') {
        setTierColor('lightBlue');
      } else if (props.hero.tier.charAt(0) === 'A') {
        setTierColor('green');
      } else if (props.hero.tier.charAt(0) === 'B') {
        setTierColor('lightGreen');
      } else if (props.hero.tier.charAt(0) === 'C') {
        setTierColor('yellow');
      } else if (props.hero.tier.charAt(0) === 'D') {
        setTierColor('orange');
      } else if (props.hero.tier.charAt(0) === 'F') {
        setTierColor('red');
      }
    }
  }, [props.hero]);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      className={styles.heroImage}
      src={props.hero.image}
      onDragStart={handleDragStart}
      role="presentation"
      alt={props.hero.name}
    />,
    <img
      className={styles.hpImage}
      src={props.hero.hpImage}
      onDragStart={handleDragStart}
      role="presentation"
      alt={props.hero.name}
    />,
  ];
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.avatar}>
            <Avatar
              sx={{ bgcolor: `${tierColor}`, color: 'black' }}
              aria-label="tier"
            >
              {props.hero.tier}
            </Avatar>
          </div>
          <div className={styles.title}>
            <h3>{props.hero.name}</h3>
            <h4>{`Tier : ${props.hero.tier}`}</h4>
          </div>
        </div>
        <div className={styles.cardImage}>
          <AliceCarousel
            animationType="fadeout"
            animationDuration={800}
            mouseTracking
            items={items}
            autoPlay={true}
            disableButtonsControls={true}
            disableDotsControls={true}
            infinite
            autoPlayInterval={3000}
          />
          {/* <div className={styles.heroImage}>
            <img src={props.hero.image} alt={props.hero.name} />
          </div>
          <div className={styles.hpImage}>
            <img src={props.hero.hpImage} alt={props.hero.name} />
          </div> */}
        </div>
        <div className={styles.cardContent}></div>
      </div>
      {/* <Card
        sx={{ maxWidth: 345 }}
        PaperComponent={({ children }) => (
          <Paper
            style={{
              background: '#3d002df1',
              color: '#ffff',
            }}
          >
            {children}
          </Paper>
        )}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: `${tierColor}` }} aria-label="tier">
              {props.hero.tier}
            </Avatar>
          }
          title={props.hero.name}
          subheader={`tier : ${props.hero.tier}`}
          style={{ backgroundColor: '#3d002df1', color: '#ffff' }}
        />
        <CardMedia component="img" image={props.hero.image} alt="Paella dish" />
        <CardContent style={{ backgroundColor: '#3d002df1', color: '#ffff' }}>
          <Typography variant="body2" style={{ color: '#ffff' }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card> */}
    </>
  );
}
