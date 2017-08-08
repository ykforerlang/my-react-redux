import React from 'react'
import { Input } from 'antd'
import styles from './style.less'

const About = () => (
    <div className={styles['about-container']}>
        <div className={styles['text-container']}>about</div>
        <Input />
    </div>
)

export default About
