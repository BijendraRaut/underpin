import styles from '../styles/mainContent.module.css';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.vikingHighlight}>
        <img src="https://s3-alpha-sig.figma.com/img/9d82/9ac5/6d775f0e9d50e741d2ce24063d3fe636?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JaJq~ew8aNXfw66ktJ6R9DB5MlsudwPcrDmEftipje0V4MDiOw1KnxkqIGbBHuBCXz~gya88VWsj0HTEOU6vPSbY8p3-RqO2KZ9Rlc-zd73SY0K3COrV2hmiJfrgZ4Qj5b22BkKjxtk2aq8Ew1QPzfswkNepd47kX2vyVBIuyXDae~taDShj38HAwZe8-Jme4K-eiBBU5LQGrUObkvgkBImkpjaXYBEOkXQTCCpEqmIK9cGkRksaEJyN8yNpB1iIxUWZ1KpSetvYHhSlZED9w0ES-SfL6ONY2EiGtvs4ClH1lXsUJVH2Ovaed4wbHQ6UVf4TNxbyZJ7kcZLzkU1fKA__" alt="Viking" />
      </div>
      <div className={styles.gameCarousel}>
        {[...Array(6)].map((_, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src="https://s3-alpha-sig.figma.com/img/f088/d54e/8eb2d90fca2ab0a83c249477fe2f4651?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FFvxnIxf4ENOEHI9BpfcXnTNbbTVdmLpIoxxM5MY04EwZ1Q1gzOFp7HPRHN-3vg2QbtecMv~9SwS7R71CsMeG-zxL7vqKofkndGNebj3p-86R7Zak2j~Eqs8zBDrtivCBkxqni9vrVcYthhZkqTiJtYpsHkYOqO2mf83oxwJFmz0UjjOGW3FsfcZAcBPOyeOZF91okPuhZmDoMsrEE8RW8qgEq2abGU5vaIYC5fJ6VO~Z9GLG9ZzOwz4fuZL83lZizn2d0ahoychtvRVD-~ZsfuBzU07xEcV9I3aHxmgdem1ERtGRp3pDFXUj8ZAuHws1PlewEHWXYkM6YBR8yEfcg__" alt={`Slot ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
