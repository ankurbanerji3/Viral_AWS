import logo from './logo.svg';
import './App.css';

import {Container, Button, Form, Navbar, Nav} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addChrom() {
  
  const pk_ = `${formstate.product}#CHROM#${formstate.purificationType}#${formstate.runNumber}`;
  const sk_ = new Date().toISOString();
  const product_ligand_ = `${formstate.product}#${formstate.ligand}`;
  
  const data = {
    body: {
      pk: pk_,
      sk: sk_,
      JSON_metadata: '',
      S3_bucket: 'S3 Bucket',
      product_ligand: product_ligand_,
      operator: formstate.operator,
      process: 'CHROMATOGRAPHY',
    }
  };

  console.log("Ok before I");
  console.log(data);
  console.log("Ok before II");
  const apiData = await API.post('formapi', '/fill', data);
  console.log("Ok till here");
  console.log({apiData});
  alert('Item Pushed');
}

const formstate = {project: '', operator: '', date: '', product: '', serotype: '', feedstock: '', cellLine: '', productTiter: '', hcpTiter: '', productImpTiter: '', sampleVolume: '', sampleSource: '', purificationMode: '', purificationType: '', ligand: '', columnHeight: '', columnDiameter: '', columnVolume: '', runNumber: ''};

function updateFormstate(key, value) {
  formstate[key] = value;
}

function App() {
  return (
    <Container>

    <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto text-center">
        <Nav.Link href="#">CHROMATOGRAPHY</Nav.Link>
        <Nav.Link as={Link} to="/hplc" className="nav-link">HPLC</Nav.Link>
        <Nav.Link href="#">SDS-PAGE</Nav.Link>
        <Nav.Link href="#">MINI-TEM</Nav.Link>
        <Nav.Link href="#">ASSAY</Nav.Link>
        <Nav.Link href="#">YIELD-ANALYTICAL</Nav.Link>
        <Nav.Link href="#">ANALYTICAL-ION-EXCHANGE</Nav.Link>
        <Nav.Link href="#">WESTERN-BLOT</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

    <div className="form-box">
      <h3>Chromatography</h3>
      <br/>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Project Name</Form.Label>
            <Form.Control placeholder="Poject Name" onChange={e => updateFormstate('project', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Operator Name</Form.Label>
            <Form.Control placeholder="Operator Name" onChange={e => updateFormstate('operator', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control placeholder="Date" onChange={e => updateFormstate('date', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product</Form.Label>
            <Form.Control placeholder="Product" onChange={e => updateFormstate('product', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Serotype</Form.Label>
            <Form.Control placeholder="Serotype" onChange={e => updateFormstate('serotype', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Feedstock Type</Form.Label>
            <Form.Control placeholder="Feedstock Type" onChange={e => updateFormstate('feedstock', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cell Line</Form.Label>
            <Form.Control placeholder="Cell Line" onChange={e => updateFormstate('cellLine', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Titer</Form.Label>
            <Form.Control placeholder="Product Titer" onChange={e => updateFormstate('productTiter', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>HCP Titer</Form.Label>
            <Form.Control placeholder="HCP Titer" onChange={e => updateFormstate('hcpTiter', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Related Impurities Titer</Form.Label>
            <Form.Control placeholder="Product Related Impurities Titer" onChange={e => updateFormstate('productImpTiter', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sample Volume</Form.Label>
            <Form.Control placeholder="Sample Volume" onChange={e => updateFormstate('sampleVolume', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sample Source</Form.Label>
            <Form.Control placeholder="Sample Source" onChange={e => updateFormstate('sampleSource', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Purification Mode</Form.Label>
            <Form.Control placeholder="Purification Mode" onChange={e => updateFormstate('purificationMode', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Purification Type</Form.Label>
            <Form.Control placeholder="Purification Type" onChange={e => updateFormstate('purificationType', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ligand ID</Form.Label>
            <Form.Control placeholder="Ligand ID" onChange={e => updateFormstate('ligand', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Run Number</Form.Label>
            <Form.Control placeholder="Run Number" onChange={e => updateFormstate('runNumber', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Column Height(cm)</Form.Label>
            <Form.Control placeholder="Column Height" onChange={e => updateFormstate('columnHeight', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Column Diameter(cm)</Form.Label>
            <Form.Control placeholder="Column Diameter" onChange={e => updateFormstate('columnDiameter', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Column Volume(mL)</Form.Label>
            <Form.Control placeholder="Column Volume" onChange={e => updateFormstate('columnVolume', e.target.value)} />
          </Form.Group>
          <div className="upload-area">
            <h3>Upload Parameters</h3>
            <input type="file" />
            <Button variant="secondary">Upload</Button>
          </div>
          <div className="upload-area">
            <h3>Upload Chromatogram</h3>
            <input type="file" />
            <Button variant="secondary">Upload</Button>
          </div>
          <div className="text-center">
            <Button variant="primary" onClick={addChrom}>SUBMIT</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default App;
