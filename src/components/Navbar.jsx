import dayjs from 'dayjs';

import { navLinks, navIcons } from '#constants'

const Navbar = () => {
    return <nav>
        <div>
            <img src="/images/logo.svg" alt="apple logo" />
            <p className="font-bold">macos portfolio</p>

            <ul>
                {navLinks.map(({id, name}) => (
                    <li key={id}>
                        <a href={`#${name.toLowerCase()}`}>{name}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} className='icon-hover' alt={`icon-${id}`} />
                    </li>
                ))}
            </ul>

            <time>{dayjs().format('ddd MMM HH:mm A')}</time>

        </div>
    </nav>;
}

export default Navbar