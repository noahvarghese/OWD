<?php require_once('../config/env.php') ?>
<?= Assets::header('contact') ?>
<?php include(Assets::nav()) ?>

<h1>CONTACT US</h1>

<div id="contact">
    <div id="form">
        <form autocomplete="on" id="contactForm">
            <div>
                <input type="text" name="fname" placeholder="FIRST NAME*" class="border" id="fname"/>
                <input type="text" name="lname" placeholder="LAST NAME*" class="border" id="lname"/>
            </div>
            <div>
                <input type="email" name="email" placeholder="E-MAIL*" class="border" id="email" />
                <input type="tel" name="phone" placeholder="PHONE*" class="border" id="phone" />
            </div>
            <div>
                <input type="text" name="city" placeholder="CITY*" class="border" id="city" />
            </div>
            <div id="checkboxes">
                <p class="gray">PRODUCTS OF INTEREST</p>
                <div id="checks">
                    <div>
                        <input type="checkbox" id="windows" name="windows" />
                        <label for="windows" class="gray">WINDOWS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="entry" name="entry" />
                        <label for="entry" class="gray">ENTRY DOOR SYSTEMS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sliding" name="sliding" />
                        <label for="sliding" class="gray">SLIDING PATIO DOORS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="garage" name="garage" />
                        <label for="garage" class="gray">GARAGE DOORS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="porch" name="porch" />
                        <label for="porch" class="gray">PORCH ENCLOSURES</label>
                    </div>
                    <div>
                        <input type="checkbox" id="egress" name="egress" />
                        <label for="egress" class="gray">EGRESS WINDOWS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="other" name="other" />
                        <label for="other" class="gray">OTHER</label>
                    </div>
                </div>
            </div>
            <div id="messageDiv">
                <textarea id="message" placeholder="MESSAGE*"></textarea>
            </div>
            <input type="submit" value="REQUEST QUOTE" id="submit" class="g-recaptcha" data-sitekey="6LePVLMZAAAAAPLLObfHwB3bRCZySVKpNHgZyIqw" data-callback='recaptchaCallback' data-action='submit' />
        </form>
        <div id="error" class="error"></div>
    </div>
    <div id="info">

        <p class="gray">
            To get started working with us, or if you
            have any questions, please contact us
            using the form above. You can also give us
            a call at (905) 827-3200 or email us at
            sales@oakvillewindows.com.
        </p>

        <div id="location">
            <h2 class="gray">LOCATION:</h2>

            <p class="orange">
                1380 Speers Rd. Unit #7<br />
                Oakville, Ontario<br />
                L6L 5V3
            </p>
        </div>

        <div id="phoneNumbers">
            <p>
                <span class="gray">Direct: </span>
                <span class="orange">(365) 777 0976</span>
            </p>
            <p>
                <span class="gray">Office: </span>
                <span class="orange">(905) 827 3200</span>
            </p>
            <p>
                <span class="gray">Fax: </span>
                <span class="orange">(905) 827 3206</span>
            </p>
        </div>

        <div id="hours">
            <h2 class="gray">OFFICE & SHOWROOM HOURS:</h2>
            <p class="orange">
                <span>Monday</span>
                <span>9:00 am - 4:00pm</span>
            </p>
            <p class="orange">
                <span>Tuesday</span>
                <span>9:00 am - 4:00pm</span>
            </p>
            <p class="orange">
                <span>Wednesday</span>
                <span>9:00 am - 4:00pm</span>
            </p>
            <p class="orange">
                <span>Thursday</span>
                <span>9:00 am - 6:00pm</span>
            </p>
            <p class="orange">
                <span>Friday</span>
                <span>9:00 am - 6:00pm</span>
            </p>
            <p class="orange">
                <span>Saturday<span class="gray">*</span></span>
                <span>By Appointment Only</span>
            </p>
            <p class="orange">
                <span>Sunday</span>
                <span>Closed</span>
            </p>

            <div class="gray" id="exceptions">
                <p>*Closed Saturdays during the months of November, December, January & February.</p>
                <p>*Closed Saturdays of Long Weekends.</p>
            </div>
        </div>

    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.800801278461!2d-79.71486178383195!3d43.422988475303114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5dba16866961%3A0x715961398c0fb8a8!2sOakville%20Windows%20%26%20Doors!5e0!3m2!1sen!2sca!4v1595081496207!5m2!1sen!2sca" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

</div>

<div id="snackbar">Message Sent...</div>

<?php include(Assets::footer()) ?>