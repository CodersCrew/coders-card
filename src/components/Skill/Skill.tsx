import React from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type LevelRange = 0 | 1 | 2 | 3 | 4 | 5;

export interface SkillProps extends MuiBoxProps {
    label: string;
    level: LevelRange;
}


const useStyles = makeStyles(theme => {
    const { palette } = theme;

    return {
        root: {
            minWidth: "176px",
            height: "40px",
        },
        tilesContainer: {
            width: "100%",
            height: "8px",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridGap: "0 8px"
        },
        tile: {
            justifySelf: "stretch",
            borderRadius: "2px",
        },
        active: {
            backgroundColor: palette.text.secondary,
        },
        inactive: {
            backgroundColor: palette.divider
        }
    }
});


export const Skill: React.FC<SkillProps> = ({ label, level, ...rest }) => {
    const classes = useStyles();

    return <MuiBox {...rest} className={classes.root}>
        <Typography variant="subtitle2" gutterBottom>
            {label}
        </Typography>
        <div className={classes.tilesContainer}>
            {[1, 2, 3, 4, 5].map(tileLevel => {
                return <div key={`${label}-${tileLevel}`} className={`${classes.tile} ${tileLevel <= level ? classes.active : classes.inactive}`} />
            })}
        </div>
    </MuiBox>;
}
