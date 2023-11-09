function onPlanterTypeChange(e) {
    e.preventDefault();

    const value = e.target.value;

    if (value === 'rectangular') {
        fetch('planters/rectangular.html').then((res) => res.text()).then((html) => { document.getElementById("planterInputs").innerHTML = html }
        )
    } else if (value === 'flat-bottom') {
        fetch('planters/flatbottom.html').then((res) => res.text()).then((html) => { document.getElementById("planterInputs").innerHTML = html }
        )
    } else if (value === 'half-spherical') {
        fetch('planters/halfspherical.html').then((res) => res.text()).then((html) => { document.getElementById("planterInputs").innerHTML = html }
        )
    } else if (value === 'truncated-cone') {
        fetch('planters/truncatedcone.html').then((res) => res.text()).then((html) => { document.getElementById("planterInputs").innerHTML = html }
        )
    }
}
document.getElementById('planterType').onchange = onPlanterTypeChange;


document.myform.onsubmit = (e) => {
    e.preventDefault();

    let receipt = "";
    let rhead = "";
    let rbody = "";
    let rbase = "";
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const code = document.getElementById("code").value;


    rhead = `<h3 class="rhead"> Receipt </h3>`;
    rbody = `${firstName}  `;
    rbody += `${lastName}<br>`;
    rbody += `${address1}, `;
    rbody += `${address2}<br>`;
    rbody += `${code}<br><br>`;
    
    if (document.getElementById('planterType').value == 'rectangular') {
        const width = document.getElementById('width').value;
        const height = document.getElementById('height').value;
        const length = document.getElementById('length').value;

        let recVol = length * width * height;
        let recCost = recVol * 0.001;

        rbody += 'Type: Retangular Cube <br>'
        rbody += `Dimensions: Width = ${width}cm, Height = ${height}cm, Length = ${length}cm<br>`
        rbody += `Volume: ${parseFloat(recVol).toFixed(2)}cm<sup>3</sup><br>`
        rbody += `Total cost: $${parseFloat(recCost).toFixed(2)}`
    }
    else if (document.getElementById('planterType').value == 'flat-bottom') {
        const height = document.getElementById('height').value;
        const radius = document.getElementById('radius').value;
        const pi = Math.PI;

        let fBottomVol = pi * radius * radius * height
        let fBottomCost = fBottomVol * 0.0012;

        rbody += 'Type: Flat Bottom Cylinder <br>'
        rbody += `Dimensions: Radius = ${radius}cm, Height = ${height}cm<br>`
        rbody += `Volume: ${parseFloat(fBottomVol).toFixed(2)}cm<sup>3</sup><br>`
        rbody += `Total cost: $${parseFloat(fBottomCost).toFixed(2)}`
    }
    else if (document.getElementById('planterType').value == 'half-spherical') {
        const radius = document.getElementById('radius').value;
        const pi = Math.PI;

        let hSphericalVol = 4 / 3 * pi * radius * radius * radius
        let hSphericalCost = hSphericalVol * 0.0015;

        rbody += 'Type: Half Spherical <br>'
        rbody += `Dimensions: Radius = ${radius}cm<br>`
        rbody += `Volume: ${parseFloat(hSphericalVol).toFixed(2)}cm<sup>3</sup><br>`
        rbody += `Total cost: $${parseFloat(hSphericalCost).toFixed(2)}`
    }
    else if (document.getElementById('planterType').value == 'truncated-cone') {
        const radius1 = document.getElementById('radius1').value;
        const radius2 = document.getElementById('radius2').value;
        const height = document.getElementById('height').value;
        const pi = Math.PI;

        let tConeVol = 1 / 3 * pi * (radius1 * radius1 + radius1 * radius2 + radius2 * radius2) * height
        let tConeCost = tConeVol * 0.002;

        rbody += 'Type: Truncated cone <br>'
        rbody += `Dimensions: Radius1 = ${radius1}cm, Radius2 = ${radius2}cm, Height = ${height}cm<br>`
        rbody += `Volume: ${parseFloat(tConeVol).toFixed(2)}cm<sup>3</sup><br>`
        rbody += `Total cost: $${parseFloat(tConeCost).toFixed(2)}`
    }


    rbody = `<div class="rbody">${rbody}</div>`;


    receipt = `${rhead}${rbody}`;

    document.getElementById('receipt').innerHTML = `<div class="receipt">${receipt}</div>`;

}