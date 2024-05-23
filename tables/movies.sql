--------------------------------------------------------
--  File created - Wednesday-May-22-2024   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table MOVIES
--------------------------------------------------------

  CREATE TABLE "SCOTT"."MOVIES" 
   (	"MOVIE_ID" NUMBER(*,0), 
	"TITLE" VARCHAR2(255 BYTE) COLLATE "USING_NLS_COMP", 
	"DESCRIPTION" CLOB COLLATE "USING_NLS_COMP", 
	"RELEASE_YEAR" NUMBER(*,0), 
	"GENRE_ID" NUMBER(*,0), 
	"CREATED_AT" TIMESTAMP (6) DEFAULT CURRENT_TIMESTAMP
   )  DEFAULT COLLATION "USING_NLS_COMP" SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" 
 LOB ("DESCRIPTION") STORE AS SECUREFILE (
  TABLESPACE "USERS" ENABLE STORAGE IN ROW 4000 CHUNK 8192
  NOCACHE LOGGING  NOCOMPRESS  KEEP_DUPLICATES 
  STORAGE(INITIAL 262144 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) ;
REM INSERTING into SCOTT.MOVIES
SET DEFINE OFF;
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (1,'Inception',2010,5,to_timestamp('24-05-21 21:19:23.179589000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (2,'The Matrix',1999,5,to_timestamp('24-05-21 21:26:14.930062000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (3,'Interstellar',2014,5,to_timestamp('24-05-21 21:26:14.935115000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (4,'The Godfather',1972,3,to_timestamp('24-05-21 21:26:14.938842000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (5,'The Dark Knight',2008,1,to_timestamp('24-05-21 21:26:14.942978000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (6,'Pulp Fiction',1994,1,to_timestamp('24-05-21 21:26:14.948481000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (7,'Schindler''s List',1993,3,to_timestamp('24-05-21 21:26:14.955672000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (8,'Fight Club',1999,1,to_timestamp('24-05-21 21:26:14.960579000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (9,'Forrest Gump',1994,3,to_timestamp('24-05-21 21:26:14.965437000','RR-MM-DD HH24:MI:SSXFF'));
Insert into SCOTT.MOVIES (MOVIE_ID,TITLE,RELEASE_YEAR,GENRE_ID,CREATED_AT) values (10,'The Shawshank Redemption',1994,3,to_timestamp('24-05-21 21:26:14.969990000','RR-MM-DD HH24:MI:SSXFF'));
--------------------------------------------------------
--  DDL for Index SYS_C0013258
--------------------------------------------------------

  CREATE UNIQUE INDEX "SCOTT"."SYS_C0013258" ON "SCOTT"."MOVIES" ("MOVIE_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Trigger MOVIE_BEFORE_INSERT
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "SCOTT"."MOVIE_BEFORE_INSERT" 
BEFORE INSERT ON Movies
FOR EACH ROW
BEGIN
    :new.movie_id := movie_seq.NEXTVAL;
END;

/
ALTER TRIGGER "SCOTT"."MOVIE_BEFORE_INSERT" ENABLE;
--------------------------------------------------------
--  Constraints for Table MOVIES
--------------------------------------------------------

  ALTER TABLE "SCOTT"."MOVIES" MODIFY ("TITLE" NOT NULL ENABLE);
  ALTER TABLE "SCOTT"."MOVIES" ADD PRIMARY KEY ("MOVIE_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table MOVIES
--------------------------------------------------------

  ALTER TABLE "SCOTT"."MOVIES" ADD FOREIGN KEY ("GENRE_ID")
	  REFERENCES "SCOTT"."GENRES" ("GENRE_ID") ENABLE;