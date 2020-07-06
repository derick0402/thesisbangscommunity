<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mdrrmo extends CI_Controller {

	public function home($page = 'home')
	{
                if($page == "" || $page == "home" || $page == "contacts" || $page == "safety" || $page == "about"){
                        //show_404();
                        $this->load->view('pages/header');
                        $this->load->view('pages/mdrrmo');
                        $this->load->view('pages/footer');
                }
                else{
                        show_404();
                }
                
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
