import { MDBFooter, MDBContainer, MDBCol, MDBRow,} from "mdb-react-ui-kit";

export function Footer() {
    return (
        <MDBFooter className='bg-secondary text-white text-center text-md-start class5 '>
            <MDBContainer className='p-4' >
                <MDBRow>
                    <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Gaming Club</h5>

                        <p>
                        "Play fusion is an online gaming platform that gives you access to thousands of online games, ranging from single to complex, to Test, Buy, Play and have fun with friends and family.."
                        </p>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Terms And Policies</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-white'>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Hyperlink Policy
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Website Policies
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Content Policies
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>Need Help</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-white'>
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Frequently Asked Question
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Raise a concern
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Feedback
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 :{" "}
                <a className='text-white' href='#!'>
                     CRIATIVEGAMES.com
                </a>
            </div>
        </MDBFooter>
    );
}