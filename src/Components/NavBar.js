import React from 'react'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Free library</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navOptionsCollapse" aria-controls="navOptionsCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navOptionsCollapse">
                    <ul class="navbar-nav navOptions">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownGenders" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genders
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownGenders">
                                <li>Fantasy</li>
                                <li>Science fiction</li>
                                <li>History</li>
                                <li>Romance</li>
                                <li>Adventure</li>
                                <li>Mistery</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar