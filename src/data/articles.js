import React from "react";

function article_4() {
	return {
		date: "Déc 2018 - Fév 2019",
		title: "Consultant - Développeur Backend Symfony",
		description:
				"<p>Chargé de développer et concevoir une application web dédiée à la campagne de sensibilisation des secteurs informels de la ville d'Antananarivo.</p>",
		tags: [
			'Angular 4',
			'NodeJs',
			'Symfony 4.4',
			'MongoDb',
			'MariaDb',
			'Redis',
			'API Rest',
			'Apache HTTP Server',
		],
	};
}

function article_3() {
	return {
		date: "Mars 2020 - Fév 2022",
		title: "Ticketing app - Développeur Symfony (+ VueJs)",
		description:
				"<p>Application de gestion des tickets (demandes) d&#39;une soci&eacute;t&eacute; Fran&ccedil;aise sp&eacute;cialis&eacute;e dans l&#39;externalisation de l&#39;administration du personnel et de gestion de paie.</p> <p>Une application web modulaire, destin&eacute; &agrave; &ecirc;tre utilis&eacute; par diff&eacute;rentes structures de soci&eacute;t&eacute; (un seul client ou un client avec ses propres clients).</p> <p>Chaque soci&eacute;t&eacute; cliente a son propre sous domaines &agrave; la cr&eacute;ation du compte.</p> <p>L&#39;acc&egrave;s aux diff&eacute;rentes fonctionnalit&eacute;s de l&#39;application a &eacute;t&eacute; divis&eacute; en plusieurs permissions pour pouvoir ensuite en cr&eacute;er des profils utilisateurs flexibles.</p> <p>Les fonctionnalit&eacute;s cl&eacute;s de l&#39;application sont:</p> <ul> <li>Cr&eacute;ation de demandes sortantes (vers un client)&nbsp;</li> <li>Traitement de demandes entrantes en suivant un cycle de vie (Ouverte / en cours de traitement / Trait&eacute; / Cl&ocirc;tur&eacute;e / Archiv&eacute;e) <ul> <li>Discussion instantan&eacute;e est incluse dans le traitement</li> </ul> </li> <li>Export des demandes</li> <li>Archivage des demandes dans une plage de date</li> <li>Recherche avanc&eacute;e: Par client, par application, par criticit&eacute;, dans une plage de date</li> <li>Signature: Cr&eacute;ation de signature qui sera incluse ou pas, selon le choix de l&#39;utilisateur, dans les discussions</li> <li>Message pr&eacute;d&eacute;fini: Mod&egrave;le de message &agrave; s&eacute;lectionner lors de l&#39;envoi d&#39;une r&eacute;ponse dans la discussion d&#39;une demande</li> <li>Libell&eacute;s de demande</li> <li>Gestion des profils et&nbsp;utilisateurs</li> <li>Gestion des comptes clients</li> <li>Notification emails asynchrones</li> </ul> <p>Mes interventions sur le projet</p> <ul> <li>Mise en &oelig;uvre de l&rsquo;environnement de d&eacute;veloppement avec Docker</li> <li>Conception et d&eacute;veloppement de l&#39;API REST avec Symfony 5.3 et Api Platform 2.6</li> <li>Mise en place de le CI sur Jenkins</li> <li>D&eacute;veloppement du frontend avec Vue Js 2</li> <li>Branchement de Sentry pour l&#39;erreur Tracking</li> <li>&Eacute;criture de la documentation technique</li> <li>Gestion des certificats SSL</li> </ul>",
		tags: [
			'Projet client',
			'VueJs 2',
			'PHP 7.2 / 8.0',
			'Symfony 4.4 / Symfony 5.3',
			'Api Platform 2.6',
			'Nginx',
			'Jenkins',
			'Gitlab',
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}


function article_2() {
	return {
		date: "Avr 2022 - Janv 2023",
		title: "Consultant - Lead Développeur",
		description:
				"<p>Consultant, Lead développeur backend PHP / Symfony d'une équipe sur un projet de vente de biens immobiliers (HBS-research) par le biais d'une société basé à Madagascar</p>",
		tags: [
			'Symfony 2.8 & 4.4',
			'Propel',
			'PHP 5.6 / 7.2',
			'Docker',
			'React',
			'REST API',
			'MySQL',
			'PostgreSQL',
			'GitLab CI/CD',
		],
	};
}

function article_1() {
	return {
		date: "Mars 2023 - Présent",
		title: "Développeur Backend Symfony - Documents manager (Like Google Drive)",
		description:
				"<p>Une application web de partage de fichiers comme Google Drive pour une soci&eacute;t&eacute; Fran&ccedil;aise et ses clients.</p> <p>A la cr&eacute;ation d&#39;un compte client, un sous-domaine est cr&eacute;&eacute; automatiquement. Tous les utilisateurs du client peuvent s&#39;authentifier sur l&#39;URL de leur soci&eacute;t&eacute; afin d&#39;acc&eacute;der &agrave; l&#39;espace de partage de fichiers.</p> <p>Les fonctionnalit&eacute;s cl&eacute;s de l&#39;application sont:</p> <ul> <li>Cr&eacute;ation de dossiers ou sous dossier illimit&eacute; avec personnalisation (Nom, couleur du dossier)</li> <li>Scope d&#39;accessibilit&eacute; du dossier (Priv&eacute;, partag&eacute; &agrave; un ou des utilisateurs de la soci&eacute;t&eacute;, partag&eacute; &agrave; groupe d&#39;utilisateurs de la soci&eacute;t&eacute;)</li> <li>Upload asynchrone de fichiers + choix du scope d&#39;accessibilit&eacute; du fichier</li> <li>Choix des documents qui requi&egrave;rent de signature de la part d&#39;une liste d&#39;utilisateurs</li> <li>Preview / T&eacute;l&eacute;chargement des fichiers</li> <li>Log d&#39;acc&egrave;s et historique de modification d&#39;un fichier</li> <li>Notification sur la r&eacute;ception d&#39;un fichier ainsi qu&#39;&agrave; la signature d&#39;un fichier</li> <li>Personnalisation de notification par utilisateur</li> </ul> <p>Mes interventions sur le projet</p> <ul> <li>Mise en place de l&rsquo;environnement de d&eacute;veloppement avec Docker</li> <li>Conception et d&eacute;veloppement de l&#39;API REST avec Symfony 6 et Api Platform 3</li> <li>Utilisation de l&#39;API YouSign pour les signatures &eacute;lectroniques</li> <li>Branchement de Sentry pour l&#39;erreur Tracking</li> </ul>",
		style: ``,
		tags: [
			'Projet client',
			'PHP 8.1',
			'Symfony 6',
			'Api Platform 3',
			'Nginx',
			'Gitlab',
			'Gitlab CI',
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
