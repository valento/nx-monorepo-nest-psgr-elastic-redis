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
-- Name: public; Type: SCHEMA; Schema: -; Owner: webapi
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO webapi;

--
-- Name: tenant; Type: SCHEMA; Schema: -; Owner: tenant
--

CREATE SCHEMA tenant;


ALTER SCHEMA tenant OWNER TO tenant;

--
-- Name: webapi; Type: SCHEMA; Schema: -; Owner: webapi
--

CREATE SCHEMA webapi;


ALTER SCHEMA webapi OWNER TO webapi;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: valento
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    name character varying(20) DEFAULT 'Anon'::character varying NOT NULL,
    age smallint,
    type character varying(20) DEFAULT 'newbie'::character varying NOT NULL,
    quote text
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
-- Name: tenant; Type: TABLE; Schema: tenant; Owner: valento
--

CREATE TABLE tenant.tenant (
    id integer NOT NULL,
    name character varying(20) DEFAULT 'Anonymous Tenant'::character varying NOT NULL,
    phone text,
    address text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE tenant.tenant OWNER TO valento;

--
-- Name: tenant_id_seq; Type: SEQUENCE; Schema: tenant; Owner: valento
--

CREATE SEQUENCE tenant.tenant_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE tenant.tenant_id_seq OWNER TO valento;

--
-- Name: tenant_id_seq; Type: SEQUENCE OWNED BY; Schema: tenant; Owner: valento
--

ALTER SEQUENCE tenant.tenant_id_seq OWNED BY tenant.tenant.id;


--
-- Name: tester; Type: TABLE; Schema: tenant; Owner: valento
--

CREATE TABLE tenant.tester (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(20) DEFAULT 'Tester'::text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE tenant.tester OWNER TO valento;

--
-- Name: customer id; Type: DEFAULT; Schema: public; Owner: valento
--

ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);


--
-- Name: tenant id; Type: DEFAULT; Schema: tenant; Owner: valento
--

ALTER TABLE ONLY tenant.tenant ALTER COLUMN id SET DEFAULT nextval('tenant.tenant_id_seq'::regclass);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: valento
--

COPY public.customer (id, name, age, type, quote) FROM stdin;
1	Valento	12	owner	Say something smart here...
2	Mike Tyson	58	pro	Everyone has a plan 'till they get punched in the mouth
\.


--
-- Data for Name: tenant; Type: TABLE DATA; Schema: tenant; Owner: valento
--

COPY tenant.tenant (id, name, phone, address, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: tester; Type: TABLE DATA; Schema: tenant; Owner: valento
--

COPY tenant.tester (uuid, name, created_at, updated_at) FROM stdin;
cafd1a8f-3365-4f44-89a8-b9c86a0f543b	Vale	2024-06-20 15:23:38.548424	2024-06-20 15:23:38.548424
2d31f790-d08f-428a-8068-770ffec1c867	Vale	2024-06-20 15:23:47.323287	2024-06-20 15:23:47.323287
95b3aeeb-442f-4f4d-9918-afdf2d56c34a	Messi	2024-06-21 05:40:33.207696	2024-06-21 05:40:33.207696
\.


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: valento
--

SELECT pg_catalog.setval('public.customer_id_seq', 55, true);


--
-- Name: tenant_id_seq; Type: SEQUENCE SET; Schema: tenant; Owner: valento
--

SELECT pg_catalog.setval('tenant.tenant_id_seq', 1, false);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: valento
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- Name: tenant tenant_pkey; Type: CONSTRAINT; Schema: tenant; Owner: valento
--

ALTER TABLE ONLY tenant.tenant
    ADD CONSTRAINT tenant_pkey PRIMARY KEY (id);


--
-- Name: tester tester_pkey; Type: CONSTRAINT; Schema: tenant; Owner: valento
--

ALTER TABLE ONLY tenant.tester
    ADD CONSTRAINT tester_pkey PRIMARY KEY (uuid);


--
-- Name: TABLE customer; Type: ACL; Schema: public; Owner: valento
--

GRANT ALL ON TABLE public.customer TO webapi;


--
-- Name: SEQUENCE customer_id_seq; Type: ACL; Schema: public; Owner: valento
--

GRANT USAGE ON SEQUENCE public.customer_id_seq TO webapi;


--
-- Name: TABLE tenant; Type: ACL; Schema: tenant; Owner: valento
--

GRANT ALL ON TABLE tenant.tenant TO tenant;


--
-- Name: TABLE tester; Type: ACL; Schema: tenant; Owner: valento
--

GRANT ALL ON TABLE tenant.tester TO tenant;


--
-- PostgreSQL database dump complete
--

