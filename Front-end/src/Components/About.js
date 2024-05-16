/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './AboutStyle.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
export default function Aboutus() {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>AboutUs</h1>
			<div className='about'>
				<h2 className='header'>AIRLINES</h2>
				<p className='para'>A ticket is generally only good on the airline for which it was purchased.
					However, an airline can endorse the ticket, so that it may be accepted by other airlines, sometimes on a standby basis or with a confirmed seat.
					Usually the ticket is for a specific flight. It is also possible to purchase an 'open' ticket, which allows travel on any flight between the destinations listed on the ticket.
					The cost of this is greater than a ticket for a specific flight. Some tickets are refundable. However, the lower cost tickets are usually not refundable and may carry many additional restrictions.
					The carrier (airline) is represented by a standardized two-character alphanumeric code. In the example above, Thai Airways is TG.
					The departure and destination cities are represented by International Air Transport Association airport codes.
					In the example above, Munich is MUC and Bangkok is BKK.
					The International Air Transport Association is the standard setting organization.

					Only one passenger can use a ticket. If multiple passengers are traveling together, the tickets are linked together by the same record locator or reservation number, which are assigned, if the tickets were purchased at the same time.
					If not, most airlines can cross-reference the tickets together in their reservation systems.
					This allows all members in a party to be processed in a group, allowing seat assignments to be together.</p>
				<h2 className='header'>TRAIN</h2>
				<p className='para'>Ensuring passenger safety is the foremost priority for airlines, encompassing a multifaceted approach aimed at mitigating risks and maintaining the highest standards of protection throughout the journey.
					This commitment begins with stringent aircraft maintenance procedures, where regular inspections and adherence to manufacturer guidelines ensure mechanical integrity. Equally vital is the thorough training and certification of pilots, who undergo extensive education, simulator drills, and recurrent assessments to uphold proficiency and situational awareness.
					Airlines also implement robust safety management systems, fostering a proactive culture of risk identification and mitigation.
					Emergency preparedness is paramount, with crews trained to swiftly address diverse scenarios, from medical crises to security incidents, ensuring passenger well-being.
					Moreover, stringent security measures, including comprehensive screening and advanced technology, safeguard against potential threats.
					By nurturing a strong safety culture, encouraging open communication, and leveraging innovation, airlines strive to foster an environment where passenger safety remains uncompromised, affirming their commitment to delivering secure and reliable air travel experiences.</p>
				<h2 className='header'>Regulatory Compliance</h2>
				<p className='para'> Airlines must adhere to strict regulations and guidelines set by aviation authorities such as the Federal Aviation Administration (FAA) in the United States or the European Union Aviation Safety Agency (EASA) in Europe.
					These regulations cover aircraft maintenance, pilot training, operational procedures, and more.</p>
				<h2 className='header'>Aircraft Maintenance</h2>
				<p className='para'>Airlines conduct rigorous maintenance checks and adhere to manufacturer-recommended maintenance schedules to ensure the airworthiness of their aircraft.
					Regular inspections, repairs, and component replacements are carried out to prevent mechanical failures.</p>
				<h2 className='header'>Pilot Training and Certification</h2>
				<p className='para'> Pilots undergo extensive training and certification processes, including simulator training, recurrent training, and proficiency checks, to maintain their skills and knowledge.
					They must meet stringent requirements in terms of flight hours, experience, and medical fitness.</p>
				<h2 className='header'>Security Measures</h2>
				<p className='para'> Airlines collaborate with airport authorities and government agencies to implement robust security measures to prevent unauthorized access to aircraft and mitigate security threats.
					This includes passenger and baggage screening, cockpit door security, and personnel background checks</p>
			</div>
			{/* <div className='contact'>
				<div className='quick-link'>
					<h2 style={{ color: 'white' }}>QuickLinks</h2>
					<NavLink to='/' className='quicklink-item'>Home</NavLink>
					 <NavLink to='/About' className='quicklink-item'>Aboutus</NavLink> 

				</div> */}

			<footer class="footer">
				<div class="container">
					<div class="row">
						<div class="footer-col">
							<h4>company</h4>
							<ul>
								
							<NavLink className='about1'to='/About'>Aboutus</NavLink>
							<NavLink to="/">Home</NavLink>
									
								
							</ul>
						</div>
						<div class="footer-col">
							<h4>get help</h4>
							<ul>
								<li><a href="#">FAQ</a></li>
								<li><a href="#">shipping</a></li>
								<li><a href="#">returns</a></li>
								<li><a href="#">order status</a></li>
								<li><a href="#">payment options</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>online shop</h4>
							<ul>
								<li><a href="#">watch</a></li>
								<li><a href="#">bag</a></li>
								<li><a href="#">shoes</a></li>
								<li><a href="#">dress</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>follow us</h4>
							<div class="social-links">
								<a href="#"><FaFacebookSquare /></a>
								<a href="#"><FaTwitterSquare /></a>
								<a href="#"><FaInstagram /></a>
								<a href="#"><FaLinkedin /></a>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</div>
	)

}