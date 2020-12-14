import React from 'react'
import styles from './Switcher.scss'
import classnames from 'classnames/bind'
import {handleThemeChange} from '../../actions/actions'
import {connect} from "react-redux"

const cx = classnames.bind(styles);

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
})

const SwitcherComponent = ({
                               theme,
                               dispatchOnThemeChange
                           }) => {
    const onThemeChange = (e) => {
        dispatchOnThemeChange(e.target.value)
    }
    return (
        <div className={cx("theme-switcher")}>
            <div>
                <input type="radio" name="theme" id="light" value="light"
                       checked={theme === "light"} onChange={onThemeChange}
                       className={cx("radio", {[`radio-theme-${theme}`]: true})}/>
                <label className={cx("label", {[`label-theme-${theme}`]: true})}>Light Theme</label>
            </div>

            <div>
                <input type="radio" name="theme" id="dark" value="dark"
                       checked={theme === "dark"} onChange={onThemeChange}
                       className={cx("radio", {[`radio-theme-${theme}`]: true})}/>
                <label className={cx("label", {[`label-theme-${theme}`]: true})}>Dark Theme</label>
            </div>
        </div>

    )
}
export const Switcher = connect(mapStateToProps, mapDispatchToProps)(SwitcherComponent)

