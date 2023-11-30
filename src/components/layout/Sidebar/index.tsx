import { Sun } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.wrap}>
			<Image
				src="/blossom.svg"
				width={50}
				height={50}
				alt="лого
			"
			/>
			<Sun />
		</div>
	)
}

export default Sidebar
