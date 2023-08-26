import classes from './Nav.module.css'

const Nav = () => {
    return (<>
        <div className={classes.navHeaderWrapper}>
            <div className="container">
                <nav className={classes.nav}>
                    <div className={classes.navHeader}>
                        <div className={classes.appTitle}>
                            <p>Fitness Tracking App</p>
                        </div>
                        <div className={classes.userPanel}>
                            <p>User Authentication</p>
                            <p>Dashboard</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div className={classes.navMainWrapper}>
            <div className='container'>
                <nav className={classes.nav}>
                    <div className={classes.navMain}>
                        <div className={classes.logo}>
                            <h1>FitTrack</h1>
                        </div>
                        <div className={classes.navigation}>
                            <ul className={classes.list}>
                                <li className={classes.listItem}>Activity Logging</li>
                                <li className={classes.listItem}>Goals Setting</li>
                                <li className={classes.listItem}>Progress Tracking</li>
                                <li className={classes.listItem}>Profile Editing</li>
                            </ul>
                        </div>
                        <div className={classes.socialSharing}>
                            <button className={classes.socialSharingBtn}>Social Sharing</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>)
}

export default Nav