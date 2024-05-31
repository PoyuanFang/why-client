import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { StatusCodes } from 'http-status-codes';
import { createRouter } from 'next-connect';
import { stripHtml } from 'string-strip-html';

const router = createRouter();

router.get(async (req, res) => {
	const limit = req.query.limit ?? 10;
	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Name, Course.Intro,Course.WhenLaunched,Course.Price,File.FileName, Domain.Name AS DomainName FROM Course JOIN File ON Course.ThumbnailSN = File.SN JOIN Domain ON Course.DomainSN = Domain.SN ORDER BY WhenLaunched DESC'
	);

	res.status(200).json(results);
});

export default router.handler({ onError, onNoMatch });
