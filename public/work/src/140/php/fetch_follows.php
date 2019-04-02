<?php
	$followers = mysqli_fetch_assoc(mysqli_query($cnx, "SELECT COUNT( FOLLOWSTHISUSER_ID ) AS FOLLOWERS FROM follows WHERE FOLLOWSTHISUSER_ID = $_SESSION[ID] AND FOLLOWSTHISUSER_ID != THISUSER_ID"))['FOLLOWERS'];

	// $followers_id = array();

	$query = mysqli_query($cnx, "SELECT FOLLOWSTHISUSER_ID AS FOLLOWERS_ID FROM follows WHERE THISUSER_ID = $_SESSION[ID]");

#	while($row = mysqli_fetch_assoc($query))
#	{
#    	array_push($followers_id, $row);
#	}
	
	
	$following = mysqli_fetch_assoc(mysqli_query($cnx, "SELECT COUNT( THISUSER_ID) AS FOLLOWING FROM follows WHERE THISUSER_ID = $_SESSION[ID] AND FOLLOWSTHISUSER_ID != THISUSER_ID"))['FOLLOWING'];
?>