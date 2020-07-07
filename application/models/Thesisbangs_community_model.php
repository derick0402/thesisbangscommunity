<?php

    class Thesisbangs_community_model extends CI_model{
        public function __construct(){
			$this->load->database();
        }
        public function get_hazard_map_data(){
            $query = $this->db->get('hazard_map');
            return $query->result_array();
        }
    }      
?>