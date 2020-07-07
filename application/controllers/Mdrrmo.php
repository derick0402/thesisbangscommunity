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
                        //show_404();
                        //$this->load->view('pages/header');
                        $this->load->view('pages/not_found');
                        //$this->load->view('pages/footer');
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
        public function evacuation(){
                $this->load->view('pages/header');
                $this->load->view('pages/evacuation');
                $this->load->view('pages/footer');
        }

        public function hazardMap(){
                $this->load->view('pages/header');
                $this->load->view('pages/hazard_map');
                $this->load->view('pages/footer');
        }
        public function getHazardMapData(){
                $hazard_map = $this->thesisbangs_community_model->get_hazard_map_data();
                if($hazard_map){
                        $this->data['status'] = "success";
                        $this->data['hazard_map'] = $hazard_map;
                }
                else{
                        $this->data['status'] = "error";
                        $this->data['message'] = "There was";
                }
                echo json_encode($this->data);
        }

        public function references(){
                $this->load->view('pages/header');
                $this->load->view('pages/references');
                $this->load->view('pages/footer');
        }
}
