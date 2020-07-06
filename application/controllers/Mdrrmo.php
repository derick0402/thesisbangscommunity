<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mdrrmo extends CI_Controller {

	public function index()
	{
                $this->load->view('pages/header');
                $this->load->view('pages/mdrrmo');
                $this->load->view('pages/footer');
        }
        public function lindol(){
                $this->load->view('pages/header');
                $this->load->view('pages/lindol');
                $this->load->view('pages/footer');
        }
}
