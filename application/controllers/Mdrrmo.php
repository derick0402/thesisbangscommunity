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
        public function bagyo(){
                $this->load->view('pages/header');
                $this->load->view('pages/bagyo');
                $this->load->view('pages/footer');
        }
        public function kalsada(){
                $this->load->view('pages/header');
                $this->load->view('pages/kalsada');
                $this->load->view('pages/footer');
        }
        public function sunog(){
                $this->load->view('pages/header');
                $this->load->view('pages/sunog');
                $this->load->view('pages/footer');
        }
        public function pagguho(){
                $this->load->view('pages/header');
                $this->load->view('pages/pagguho');
                $this->load->view('pages/footer');
        }
}
