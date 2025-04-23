import './App.css';

function App() {
  return (
    <div className="privacy-container">
      <h1>Politique de Confidentialité</h1>
      <p className="updated"><strong>Dernière mise à jour :</strong> 23 avril 2025</p>

      <section>
        <h2>1. Données collectées</h2>
        <p>
          Nous ne collectons <strong>que des données accessibles publiquement</strong> sur les plateformes suivantes :
        </p>
        <ul>
          <li><strong>Facebook</strong> (pages publiques)</li>
          <li><strong>Twitter (X)</strong> (tweets publics)</li>
          <li><strong>WhatsApp</strong> (dans le cadre de groupes où notre bot est intégré et avec le consentement explicite des participants)</li>
        </ul>
        <p>Les types de données collectées peuvent inclure :</p>
        <ul>
          <li>Contenu des publications ou messages</li>
          <li>Horodatage des publications</li>
          <li>Identifiants publics (nom d’utilisateur, ID de la page ou du groupe)</li>
          <li>Statistiques publiques associées (nombre de likes, partages, etc.)</li>
        </ul>
      </section>

      <section>
        <h2>2. Utilisation des données</h2>
        <p>Les données collectées sont utilisées à des fins de :</p>
        <ul>
          <li><strong>Recherche et analyse</strong> (tendances, sentiment social, détection d’événements)</li>
          <li><strong>Statistiques internes</strong></li>
          <li><strong>Amélioration de nos services</strong></li>
        </ul>
        <p>Aucune donnée n’est utilisée à des fins commerciales, ni revendue à des tiers.</p>
      </section>

      <section>
        <h2>3. Stockage et sécurité</h2>
        <p>
          Les données sont stockées sur des serveurs sécurisés. Des mesures techniques et organisationnelles sont mises en place pour protéger vos données contre l’accès non autorisé, la modification ou la suppression.
        </p>
      </section>

      <section>
        <h2>4. Partage des données</h2>
        <p>
          Nous ne partageons pas les données collectées avec des tiers, sauf dans les cas suivants :
        </p>
        <ul>
          <li>Exigence légale ou réglementaire</li>
          <li>Partage anonyme et agrégé à des fins de recherche académique</li>
        </ul>
      </section>

      <section>
        <h2>5. Respect des plateformes</h2>
        <p>
          Nous utilisons uniquement des méthodes de collecte conformes aux <strong>politiques d’utilisation des API officielles</strong> ou aux <strong>conditions d’utilisation</strong> des plateformes concernées.
        </p>
      </section>

      <section>
        <h2>6. Droits des utilisateurs</h2>
        <p>
          Bien que nous ne collectons que des données publiques, si vous estimez qu’une information vous concernant a été collectée à tort, vous pouvez nous contacter à l’adresse suivante pour demander sa suppression :
        </p>
        <p>
          📧 <a href="mailto:adresse_email@example.com">adresse_email@example.com</a>
        </p>
      </section>

      <section>
        <h2>7. Modifications de la politique</h2>
        <p>
          Cette politique peut être mise à jour. En cas de modification significative, vous serez informé par les canaux habituels. La version à jour sera toujours disponible via notre application ou notre site.
        </p>
      </section>
    </div>
  );
}

export default App;
