import React from 'react'
import Geocode from "react-geocode"
import {CountryDropdown, RegionDropdown, CountryRegionData} from "react-country-region-selector"

class Listing extends React.Component {
    constructor(){
        super()
        this.state={
            addressOne:"",
            addressTwo: "",
            country: "",
            region:"",
            zipCode: "",
            minPrice:"",
            maxPrice:"",
            roommatePref:"",
            aptOrRoom: "",
            lat: "",
            lng: "",
            months: "",
            startDate: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    selectCountry (val) {
        this.setState({ country: val });
    }
     
    selectRegion (val) {
        this.setState({ region: val });
    }

    

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(id){
        // set response language. Defaults to english.
        Geocode.setLanguage("en");
        
        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion("es");
        
        // Enable or disable logs. Its optional.
        Geocode.enableDebug();
        Geocode.fromAddress(this.state.address).then(
            response => {
              const { latitude, longitude } = response.results[0].geometry.location;
              this.setState({
                  lat: latitude,
                  lng: longitude
              })
              console.log(latitude, longitude);
            },
            error => {
              console.error(error);
            }
          );
    }

    render(){
        return(
            <div>
                <form>
                <select value = {this.state.aptOrRoom} onChange= {this.handleChange}
                   name = "aptOrRoom">
                       <option value="nothing">Type of Housing</option>
                       <option value="apartment">Apartment</option>
                       <option value = "home">Home</option>
                   </select>
                   <br />
                    <input type="text" name="addressOne" value={this.state.addressOne}
                    placeholder="Address One" onChange={this.handleChange}/>
                    <br />
                    <input type="text" name="addressTwo" value={this.state.addressTwo}
                    placeholder="Address Two" onChange={this.handleChange}/>
                    <br />
                    <CountryDropdown
                        value={this.state.country}
                        onChange={(val) => this.selectCountry(val)} />
                    <br />
                    <RegionDropdown
                        country={this.state.country}
                        value={this.state.region}
                        onChange={(val) => this.selectRegion(val)} />
                    <br />
                    <input type="text" name="zipCode" value={this.state.zipCode}
                    placeholder="Zip Code" onChange={this.handleChange}/>
                    <br />
                    <input type="text" name="minPrice" value={this.state.minPrice}
                    placeholder="minimum price (per month)" onChange={this.handleChange}/>
                    <br />
                    <input type="text" name="maxPrice" value={this.state.maxPrice}
                    placeholder="maximum price (per month)" onChange={this.handleChange}/>
                    <br />
                    <input type="text" name="startDate" value={this.state.startDate}
                    placeholder="Start of sublease" onChange={this.handleChange}/>
                    <br />
                    <select value = {this.state.months} onChange= {this.handleChange}
                   name = "months">
                       <option value="nothing">Length of lease</option>
                       <option value="one">1</option>
                       <option value = "two">2</option>
                       <option value = "three">3</option>
                       <option value="four">4</option>
                       <option value="five">5</option>
                       <option value="six">6</option>
                       <option value="seven">7</option>
                       <option value="eight">8</option>
                       <option value="nine">9</option>
                       <option value="ten">10</option>
                       <option value="eleven">11</option>
                       <option value="twelve">12</option>
                   </select>
                   <br />
                   <select value = {this.state.roommatePref} onChange= {this.handleChange}
                   name = "roommatePref">
                       <option value="nothing">Roommate Preference</option>
                       <option value="Male">Male</option>
                       <option value = "Female">Female</option>
                       <option value = "No_Preference">No Preference</option>
                   </select>
                    <br />
                    <button onSubmit={this.handleClick}>Submit</button>
                </form>
                <h1>{this.state.lat} {this.state.lng}</h1>
            </div>
        )
    }
}

export default Listing 