import logo from './logo.svg';
import './HPLC.css';

import {Container, Button, Form, Navbar, Nav} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addChrom() {
  
  const pk_ = `${formstate.product}#${formstate.hplcType}_HPLC`;
  const sk_ = new Date().toISOString();
  const product_ligand_ = `${formstate.product}#${formstate.ligand}`;
  const process_ = `${formstate.hplcType}_HPLC`;
  
  const data = {
    body: {
      pk: pk_,
      sk: sk_,
      JSON_metadata: '',
      S3_bucket: 'S3 Bucket',
      product_ligand: product_ligand_,
      operator: formstate.operator,
      process: process_,
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

const formstate = {project: '', operator: '', date: '', product: '', serotype: '', ligand: '', hplcType: '', columnName: '', columnVolume: '', columnTemperature: '', injectionVolume: '', flowRate: '', sxcUV1: '', sxcUV2: '', secFLR: '', bufferA: '', bufferB: ''};

function updateFormstate(key, value) {
  formstate[key] = value;
}

function HPLC() {
  return (
    <Container>

    <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto text-center">
        <Nav.Link as={Link} to="/" className="nav-link">CHROMATOGRAPHY</Nav.Link>
        <Nav.Link href="#">HPLC</Nav.Link>
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
      <h3>High Performance Liquid Chromatography</h3>
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
            <Form.Label>Ligand ID</Form.Label>
            <Form.Control placeholder="Ligand ID" onChange={e => updateFormstate('ligand', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>HPLC Type</Form.Label>
            <Form.Control placeholder="HPLC Type" onChange={e => updateFormstate('hplcType', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Column Name</Form.Label>
            <Form.Control placeholder="Column Name" onChange={e => updateFormstate('columnName', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Column Volume(mL)</Form.Label>
            <Form.Control placeholder="Column Volume" onChange={e => updateFormstate('columnVolume', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Column Temperature(C)</Form.Label>
            <Form.Control placeholder="Column Temperature" onChange={e => updateFormstate('columnTemperature', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Injection Volume(uL)</Form.Label>
            <Form.Control placeholder="Injection Volume" onChange={e => updateFormstate('injectionVolume', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Flow Rate</Form.Label>
            <Form.Control placeholder="Flow Rate" onChange={e => updateFormstate('flowRate', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>SXC UV1(nm)</Form.Label>
            <Form.Control placeholder="SXC UV1" onChange={e => updateFormstate('sxcUV1', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>SXC UV2(nm)</Form.Label>
            <Form.Control placeholder="SXC UV2" onChange={e => updateFormstate('sxcUV2', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>SEC FLR(Ex./Em.nm)</Form.Label>
            <Form.Control placeholder="SEC FLR" onChange={e => updateFormstate('secFLR', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Buffer A</Form.Label>
            <Form.Control placeholder="Buffer A" onChange={e => updateFormstate('bufferA', e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Buffer B</Form.Label>
            <Form.Control placeholder="Buffer B" onChange={e => updateFormstate('bufferB', e.target.value)} />
          </Form.Group>
          <div className="upload-area">
            <h3>Upload Run</h3>
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

export default HPLC;
