<!-- k,i8 -->
<h1><strong>idzonea web app</strong></h1> 
<h2>Major text - <em>Tell me how??</em></h2>

<h3>##byBonfasOLuoch from the Jitu Training Monthly Project</h3>

<p>This is a platform that allows sharing of ideas from and to people from different domains to help them and others by showing how they cracked something to work for them and by this action people can learn from you and get your skideas to help and monetize incase you specialize in it fully as a career.</p>
<section>
<h3>Database idzoneadb</h3>
 - <h4><strong>Tables</strong></h4>
 -----------------------------------------------</p> 
    <p><strong> USERS TABLE</strong> |</p>
    ------------------------</p>
    <p>|user_id| int|Pk</p>
    <p>|username| VARCHAR(25) |Pk</p>
    <p>|user_domain| VARCHAR(50)</p>
    <p>|user_image| VARCHAR(50) |Pk</p>
    <p>|user_email | VARCHAR(20)</p>
    <p>|user_phone|VARCHAR(10)</p>
    <p>|user_location| VARCHAR(255)</p>
    <p>|user_password|VARCHAR(255)</p>
    <p>|user_confirm_password| VARCHAR(255)</p>
    <p>| - users_id Fk REF user_id</p>
    <p>| -follow_id Fk REF user_id</p>
 -----------------------------------------------</p>
    <strong><p>FOLLOW TABLE</strong></p>
    --------------------------</p>
    <p>|users_id int |Pk</p>
    <p>|follow_id int |Pk</p>
 ---<p>-----------------------------------------</p>---
    <p><strong>iDEA TABLE</strong></p>
    <p>-------------------------</p>
    <p>|idea_id int |Pk</p>
    <p>|user_id int |Fk</p>
    <p>|idea_text VARCHAR(255)</p>
    <p>|idea_img VARCHAR(255)</p>
    <p>|idea_video VARCAHR(255)</p>
    <p>|idea_file VARCHAR(255)</p>
    <p>|created_at DATE </p>
    <p>|votes int</p>
    <p>|likes int</p>
 ---<p>-----------------------------------------</p>---
    <p><strong>COMMENT TABLE</strong></p>
    <p>-------------------------</p>
    <p>|comment_id int |Pk</p>
    <p>|user_id int |Fk</p>
    <p>|idea_id int |Fk  </p>
    <p>|comment VARCHAR(255)</p>
    <p>|created_at DATE</p>
 ---<p>-----------------------------------------</p>---
    <p><strong>TESTiMONiAL TABLE</strong></p>
    <p>-------------------------</p>
    <p>|testimony_id int |Pk</p>
    <p>|user_id  int |Fk</p>
    <p>|idea_id  int |Fk</p>
    <p>|testimony VARCAHR(255)</p>
    <p>|created_at DATE</p>
 ---<p>-----------------------------------------</p>---
    <p><strong>DOMAin TABLE</strong></p>
    <p>-------------------------</p>
    <p>|domain_id int |Pk</p>
    <p>|domain_name VARCHAR(255) </p>
    <p>|added_on DATE</p>
 ---<p>-----------------------------------------</p>---
    <p>    <strong>CORRECTiON iDEAS TABLE</strong></p>
    <p>-------------------------</p>
    <p>|correct_id int |Pk</p>
    <p>|idea_id int |Fk</p>
    <p>|new_idea_text |Fk varchar(255)</p>
    <p>|domain_id int |Fk</p>
    <p>|created_at DATE</p>
 ---<p>-----------------------------------------</p>---
    <p>    <strong>COLLECTiON /SAVED iDEAS TABLE</strong></p>
    <p>-------------------------</p>
    <p>|correct_id int |Pk</p>
    <p>|idea_id int |Fk</p>
    <p>|created_at DATE</p>
    <p>|user_id int |Fk </p>
    <p>|domain_id int |Fk</p>
 ---<p>-----------------------------------------</p>---
    <p>    <strong>PROFiLE  TABLE</strong></p>
    <p>-------------------------</p>
    <p>|profile_id int |Pk </p>
    <p>|user_id int |Fk </p>
    <p>|idea_id int |Fk</p>
    <p>|comment_id int |Fk</p>
    <p>|domain_id int |Fk</p>
    <p>|follow_id int |Fk</p>
    <p>|save_id int |Fk</p>
 ---<p>-----------------------------------------</p>---
    <p>    <strong>ADVERTS  TABLE</strong></p>
    <p>-------------------------</p>
    <p>|ad_id int |Pk</p>
    <p>|created_at DATE</p>
    <p>|user_id int |Fk </p>
    <p>|ad_image VARCHAR(255)</p>
    <p>|ad_message VARCHAR(255)</p>
    <p>|ad_source VARCHAR(255)</p>
 -----------------------------------------------
</section>