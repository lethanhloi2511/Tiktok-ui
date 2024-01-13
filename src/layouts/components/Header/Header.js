import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faBookmark } from '@fortawesome/free-regular-svg-icons';
import {
    CoinIcon,
    GetAppIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveHubIcon,
    LiveIcon,
    LogoutIcon,
    MessagesIcon,
    ModeIcon,
    SettingIcon,
    ToggleIcon,
    UploadIcon,
    UserIcon,
} from '../../../components/Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

// file nội bộ
import config from '../../../config/index.js';
import Button from '../../../components/Button/index.js';
import styles from './Header.module.scss';
import images from '../../../assets/images/index.js';
import Menu from '../../../components/Popper/Menu/index.js';
import Image from '../../../components/Image/index.js';
import Search from '../Search/Search.js';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'italia',
                    title: 'Italiano (Italia)',
                },
                {
                    type: 'language',
                    code: 'indo',
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    type: 'language',
                    code: 'malay',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    type: 'language',
                    code: 'nederlands',
                    title: 'Nederlands',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japanese (Japan)',
                },
                {
                    type: 'language',
                    code: 'china',
                    title: 'Chinese (china)',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle Change Language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favourites',
            to: '/favourites',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'View Analytics',
            to: '/analytics',
        },
        {
            icon: <LiveIcon />,
            title: 'Live Studio',
            to: '/studio',
        },
        {
            icon: <LiveHubIcon />,
            title: 'Live Creator Hub',
            to: '/live',
        },
        {
            icon: <SettingIcon />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <ModeIcon />,
            title: 'Dark mode',
            to: '/',
            toggle: <ToggleIcon />,
        },
        {
            icon: <GetAppIcon />,
            title: 'Get app',
            to: '/download',
        },
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <button className={cx('action-btn')}>
                                <div className={cx('btn-upload')}>
                                    <UploadIcon className={cx('btn-upload-icon')} />
                                    <span className={cx('btn-upload-text')}>Upload</span>
                                </div>
                            </button>

                            <Tippy delay={[0, 150]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 150]} content="Inbox" placement="bottom">
                                <div className={cx('inbox')}>
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                    </button>
                                    <span className={cx('notification-inbox')}>22</span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                // Nếu src lỗi => sẽ lấy link fallback
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/afcb976ab56b4b46e6edd685375037f8~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1704441600&x-signature=Zky%2FYs422TTciXFJiXzT2SH17Uk%3D"
                                alt="avatar"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
