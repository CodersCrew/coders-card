import React from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type TLevelRange = 0 | 1 | 2 | 3 | 4 | 5;

export interface SkillProps extends MuiBoxProps {
    label?: string
    level?: TLevelRange;
}


const useStyles = makeStyles(theme => {
    const { palette } = theme;

    return {
        root: {
            width: "176px",
            height: "40px",
        },
        label: {
            color: palette.text.secondary,
            display: "inline-block",
            marginBottom: "12px",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
        },
        tile: {
            width: "32px",
            height: "8px",
            borderRadius: "2px",
            marginRight: "4px"
        },
        tilesContainer: {
            display: "flex"
        },
        active: {
            backgroundColor: palette.text.secondary,
        },
        inactive: {
            backgroundColor: palette.divider
        }
    }
});


export const Skill = ({ label, level = 0, ...props }: SkillProps) => {
    const classes = useStyles();

    return <MuiBox {...props} className={classes.root}>
        <span className={classes.label}>{label}</span>
        <div className={classes.tilesContainer}>
            {[1, 2, 3, 4, 5].map(tileLevel => {
                return <div key={`${label}-${tileLevel}`} className={`${classes.tile} ${tileLevel <= level ? classes.active : classes.inactive}`} />
            })}
        </div>
    </MuiBox>;
}
