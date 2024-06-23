--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: admin; Type: SCHEMA; Schema: -; Owner: valento
--

CREATE SCHEMA admin;


ALTER SCHEMA admin OWNER TO valento;

--
-- Name: tenant; Type: SCHEMA; Schema: -; Owner: valento
--

CREATE SCHEMA tenant;


ALTER SCHEMA tenant OWNER TO valento;

--
-- Name: webapi; Type: SCHEMA; Schema: -; Owner: valento
--

CREATE SCHEMA webapi;


ALTER SCHEMA webapi OWNER TO valento;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: valento
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    name character varying(20) DEFAULT 'Anon'::character varying NOT NULL
);


ALTER TABLE public.customer OWNER TO valento;

--
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: valento
--

CREATE SEQUENCE public.customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customer_id_seq OWNER TO valento;

--
-- Name: customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: valento
--

ALTER SEQUENCE public.customer_id_seq OWNED BY public.customer.id;


--
-- Name: tester; Type: TABLE; Schema: tenant; Owner: tenant
--

CREATE TABLE tenant.tester (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(20) DEFAULT 'Tester'::text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE tenant.tester OWNER TO tenant;

--
-- Name: customer id; Type: DEFAULT; Schema: public; Owner: valento
--

ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: valento
--

COPY public.customer (id, name) FROM stdin;
\.


--
-- Data for Name: tester; Type: TABLE DATA; Schema: tenant; Owner: tenant
--

COPY tenant.tester (uuid, name, created_at, updated_at) FROM stdin;
cafd1a8f-3365-4f44-89a8-b9c86a0f543b	Vale	2024-06-20 15:23:38.548424	2024-06-20 15:23:38.548424
2d31f790-d08f-428a-8068-770ffec1c867	Vale	2024-06-20 15:23:47.323287	2024-06-20 15:23:47.323287
95b3aeeb-442f-4f4d-9918-afdf2d56c34a	Messi	2024-06-21 05:40:33.207696	2024-06-21 05:40:33.207696
\.


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: valento
--

SELECT pg_catalog.setval('public.customer_id_seq', 1, false);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: valento
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- Name: tester tester_pkey; Type: CONSTRAINT; Schema: tenant; Owner: tenant
--

ALTER TABLE ONLY tenant.tester
    ADD CONSTRAINT tester_pkey PRIMARY KEY (uuid);


--
-- Name: SCHEMA tenant; Type: ACL; Schema: -; Owner: valento
--

GRANT ALL ON SCHEMA tenant TO tenant;


--
-- Name: SCHEMA webapi; Type: ACL; Schema: -; Owner: valento
--

GRANT ALL ON SCHEMA webapi TO tenant;


--
-- Name: TABLE customer; Type: ACL; Schema: public; Owner: valento
--

GRANT ALL ON TABLE public.customer TO webapi;


--
-- PostgreSQL database dump complete
--

